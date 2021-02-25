import { gql } from '@apollo/client';

export async function queryGithub() {
  const res = await client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
}
