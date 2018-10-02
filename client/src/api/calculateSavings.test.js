import {
  CALCULATE_SAVINGS_RESULT,
  stubCalculateSavingsSuccess,
  stubCalculateSavingsFailed,
} from './stubs/calculateSavings'
import { calculateSavings } from './calculateSavings'

afterEach(() => {
  jest.clearAllMocks()
})

describe('Calculate savings', () => {
  it('Returns the mocked value', () => {
    stubCalculateSavingsSuccess()
    expect.assertions(1)
    return expect(calculateSavings()).resolves.toEqual(CALCULATE_SAVINGS_RESULT)
  })

  it('Rejects if failed ', () => {
    stubCalculateSavingsFailed()
    expect.assertions(1)
    return expect(calculateSavings()).rejects.toEqual()
  })
})
