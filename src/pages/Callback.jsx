import * as React from 'react';
import { useLocation, Redirect, navigate } from '@reach/router';
import { useAuthState, useAuthDispatch, updateTokenAction } from '../contexts/auth';
import useAccessToken from '../api/useAccessToken';

export default function CallbackPage() {
  const location = useLocation();

  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  
  const urlSearchParams = new URLSearchParams(location.search);
  const code = urlSearchParams.get('code');
  
  const { data, isLoading, error } = useAccessToken({
    code,
    queryConfig: { enabled: !!code }
  });
  
  React.useEffect(() => {
    if (data?.access_token) {
      authDispatch(updateTokenAction(data.access_token));
    }
  }, [data, authDispatch]);

  React.useEffect(() => {
    if (authState.token) {
      void navigate('/');
    }
  }, [authState.token])

  return <div>Please wait, redirecting you back to the app...</div>
}