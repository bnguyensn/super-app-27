import * as React from 'react';
import { useAuthState } from '../contexts/auth';

export default function HomePage() {
  const authState = useAuthState();

  return <div>Hello there. You are {authState.token ? '' : 'not '}logged in</div>
}
