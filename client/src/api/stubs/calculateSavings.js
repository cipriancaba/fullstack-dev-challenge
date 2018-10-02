const CALCULATE_SAVINGS_RESULT = [
  {
    month: 1,
    amount: 500,
  },
  {
    month: 2,
    amount: 700,
  },
  {
    month: 3,
    amount: 1000,
  },
  {
    month: 4,
    amount: 1500,
  },
]

const stubCalculateSavingsSuccess = () => {
  const calculateSavings = require('../calculateSavings')
  jest
    .spyOn(calculateSavings, 'calculateSavings')
    .mockImplementation(() => Promise.resolve(CALCULATE_SAVINGS_RESULT))
}

const stubCalculateSavingsFailed = () => {
  const calculateSavings = require('../calculateSavings')
  jest
    .spyOn(calculateSavings, 'calculateSavings')
    .mockImplementation(() => Promise.reject())
}

module.exports.stubCalculateSavingsSuccess = stubCalculateSavingsSuccess
module.exports.stubCalculateSavingsFailed = stubCalculateSavingsFailed
module.exports.CALCULATE_SAVINGS_RESULT = CALCULATE_SAVINGS_RESULT
