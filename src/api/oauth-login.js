const CLIENT_ID = `79669bc0cd9839dc5356`;
const REDIRECT_URI = `https://githubgraphql.bnguyensn.repl.co/callback`;

export function getLoginOAuthUrl() {
  const baseUrl = `https://github.com/login/oauth/authorize`;

  const queryParams = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: `user:email`,
  });

  return `${baseUrl}?${queryParams.toString()}`;
}

/**
 * Given a code (obtained from the first OAuth step), request an access token.
 */
export async function getAccessToken(code) {
  const url = `https://europe-west2-bnguyensn-2468.cloudfunctions.net/get-github-access-token?code=${code}`;

  const res = await fetch(url);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json)
  }

  if (json.error) {
    throw new Error(json.error_description)
  }

  return json;
}

export default async function loginOAuth() {
  await fetch(url);
}