import { apolloClient } from '../apolloClient'
import gql from 'graphql-tag'

export const calculateSavings = variables => {
  const query = gql`
    query calculateSavings(
      $initialSavings: Float!
      $monthlySavings: Float!
      $yearlyInterest: Float!
      $interestRecurrency: InterestRecurrency!
      $months: Int!
    ) {
      calculations: calculateSavings(
        initialSavings: $initialSavings
        monthlySavings: $monthlySavings
        yearlyInterest: $yearlyInterest
        interestRecurrency: $interestRecurrency
        months: $months
      ) {
        month
        amount
      }
    }
  `
  return apolloClient.query({ query, variables }).then(res => res.data)
}
