const CLIENT_ID = `79669bc0cd9839dc5356`;
const REDIRECT_URI = `http://localhost:3000/callback`;

export function getLoginOAuthUrl() {
  const baseUrl = `https://github.com/login/oauth/authorize`;

  const queryParams = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: `user:email`,
  });

  return `${baseUrl}?${queryParams.toString()}`;
}

export default async function loginOAuth() {
  await fetch(url);
}
