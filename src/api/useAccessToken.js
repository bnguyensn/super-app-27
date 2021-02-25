import { useQuery } from 'react-query';

const TOKEN_ENDPOINT = `https://europe-west2-bnguyensn-2468.cloudfunctions.net/get-github-access-token`;

export async function fetchAccessToken({ queryKey }) {
  const [endpoint, code] = queryKey;
  
  const url = `${endpoint}?code=${code}`;

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

export default function useAccessToken({ code, queryConfig }) {
  return useQuery([TOKEN_ENDPOINT, code], fetchAccessToken, queryConfig);
}
