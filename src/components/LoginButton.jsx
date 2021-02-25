import * as React from 'react'
import { getLoginOAuthUrl } from '../api/oauth-login';

export default function LoginButton() {
  return <a href={getLoginOAuthUrl()}>Login with GitHub</a>
}
