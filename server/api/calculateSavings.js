const {
  CALCULATE_SAVINGS_RESULT,
} = require('../../client/src/api/stubs/calculateSavings')

const recurrencyMappings = { Monthly: 12, Quarterly: 3, Yearly: 1 }

const calculateSavings = args => {
  const {
    initialSavings,
    monthlySavings,
    yearlyInterest,
    interestRecurrency,
    months,
  } = args

  const recurrency = recurrencyMappings[interestRecurrency]
  const recurrencyInterval = 12 / recurrency
  const recurrencyRate = yearlyInterest / 100 / recurrency

  const result = [...Array(months).keys()].reduce(
    (acc, month) => {
      const amount =
        (acc.amount + monthlySavings) *
        (1 + ((month + 1) % recurrencyInterval === 0 ? recurrencyRate : 0))
      return {
        amount,
        calculations: [...acc.calculations, { month: month + 1, amount }],
      }
    },
    { amount: initialSavings, calculations: [] },
  )

  return result.calculations
}

module.exports = calculateSavings
