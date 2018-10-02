const { calculateSavings } = require('../server/api')
var assert = require('assert')

const {
  CALCULATE_SAVINGS_RESULT,
} = require('../client/src/api/stubs/calculateSavings')

describe('calculateSavings', () => {
  it('calculates the correct interest rate for the default values', () => {
    assert.deepEqual(
      calculateSavings({
        initialSavings: 1000,
        monthlySavings: 100,
        yearlyInterest: 5,
        interestRecurrency: 'Yearly',
        months: 50,
      }),
      [
        {
          month: 1,
          amount: 1100,
        },
        {
          month: 2,
          amount: 1200,
        },
        {
          month: 3,
          amount: 1300,
        },
        {
          month: 4,
          amount: 1400,
        },
        {
          month: 5,
          amount: 1500,
        },
        {
          month: 6,
          amount: 1600,
        },
        {
          month: 7,
          amount: 1700,
        },
        {
          month: 8,
          amount: 1800,
        },
        {
          month: 9,
          amount: 1900,
        },
        {
          month: 10,
          amount: 2000,
        },
        {
          month: 11,
          amount: 2100,
        },
        {
          month: 12,
          amount: 2310,
        },
        {
          month: 13,
          amount: 2410,
        },
        {
          month: 14,
          amount: 2510,
        },
        {
          month: 15,
          amount: 2610,
        },
        {
          month: 16,
          amount: 2710,
        },
        {
          month: 17,
          amount: 2810,
        },
        {
          month: 18,
          amount: 2910,
        },
        {
          month: 19,
          amount: 3010,
        },
        {
          month: 20,
          amount: 3110,
        },
        {
          month: 21,
          amount: 3210,
        },
        {
          month: 22,
          amount: 3310,
        },
        {
          month: 23,
          amount: 3410,
        },
        {
          month: 24,
          amount: 3685.5,
        },
        {
          month: 25,
          amount: 3785.5,
        },
        {
          month: 26,
          amount: 3885.5,
        },
        {
          month: 27,
          amount: 3985.5,
        },
        {
          month: 28,
          amount: 4085.5,
        },
        {
          month: 29,
          amount: 4185.5,
        },
        {
          month: 30,
          amount: 4285.5,
        },
        {
          month: 31,
          amount: 4385.5,
        },
        {
          month: 32,
          amount: 4485.5,
        },
        {
          month: 33,
          amount: 4585.5,
        },
        {
          month: 34,
          amount: 4685.5,
        },
        {
          month: 35,
          amount: 4785.5,
        },
        {
          month: 36,
          amount: 5129.775000000001,
        },
        {
          month: 37,
          amount: 5229.775000000001,
        },
        {
          month: 38,
          amount: 5329.775000000001,
        },
        {
          month: 39,
          amount: 5429.775000000001,
        },
        {
          month: 40,
          amount: 5529.775000000001,
        },
        {
          month: 41,
          amount: 5629.775000000001,
        },
        {
          month: 42,
          amount: 5729.775000000001,
        },
        {
          month: 43,
          amount: 5829.775000000001,
        },
        {
          month: 44,
          amount: 5929.775000000001,
        },
        {
          month: 45,
          amount: 6029.775000000001,
        },
        {
          month: 46,
          amount: 6129.775000000001,
        },
        {
          month: 47,
          amount: 6229.775000000001,
        },
        {
          month: 48,
          amount: 6646.263750000001,
        },
        {
          month: 49,
          amount: 6746.263750000001,
        },
        {
          month: 50,
          amount: 6846.263750000001,
        },
      ],
    )
  })

  it('handles 0 months', () => {
    assert.deepEqual(
      calculateSavings({
        initialSavings: 0,
        monthlySavings: 0,
        yearlyInterest: 3,
        interestRecurrency: 'Yearly',
        months: 0,
      }),
      [],
    )
  })

  it('handles initial savings 0 value', () => {
    assert.deepEqual(
      calculateSavings({
        initialSavings: 0,
        monthlySavings: 100,
        yearlyInterest: 3,
        interestRecurrency: 'Monthly',
        months: 50,
      }),
      [
        {
          month: 1,
          amount: 100.25,
        },
        {
          month: 2,
          amount: 200.75062499999999,
        },
        {
          month: 3,
          amount: 301.5025015625,
        },
        {
          month: 4,
          amount: 402.5062578164062,
        },
        {
          month: 5,
          amount: 503.7625234609472,
        },
        {
          month: 6,
          amount: 605.2719297695996,
        },
        {
          month: 7,
          amount: 707.0351095940237,
        },
        {
          month: 8,
          amount: 809.0526973680087,
        },
        {
          month: 9,
          amount: 911.3253291114287,
        },
        {
          month: 10,
          amount: 1013.8536424342072,
        },
        {
          month: 11,
          amount: 1116.6382765402927,
        },
        {
          month: 12,
          amount: 1219.6798722316435,
        },
        {
          month: 13,
          amount: 1322.9790719122225,
        },
        {
          month: 14,
          amount: 1426.536519592003,
        },
        {
          month: 15,
          amount: 1530.352860890983,
        },
        {
          month: 16,
          amount: 1634.4287430432105,
        },
        {
          month: 17,
          amount: 1738.7648149008185,
        },
        {
          month: 18,
          amount: 1843.3617269380704,
        },
        {
          month: 19,
          amount: 1948.2201312554155,
        },
        {
          month: 20,
          amount: 2053.3406815835538,
        },
        {
          month: 21,
          amount: 2158.7240332875126,
        },
        {
          month: 22,
          amount: 2264.370843370731,
        },
        {
          month: 23,
          amount: 2370.281770479158,
        },
        {
          month: 24,
          amount: 2476.4574749053554,
        },
        {
          month: 25,
          amount: 2582.8986185926187,
        },
        {
          month: 26,
          amount: 2689.6058651391,
        },
        {
          month: 27,
          amount: 2796.5798798019478,
        },
        {
          month: 28,
          amount: 2903.8213295014525,
        },
        {
          month: 29,
          amount: 3011.330882825206,
        },
        {
          month: 30,
          amount: 3119.109210032269,
        },
        {
          month: 31,
          amount: 3227.1569830573494,
        },
        {
          month: 32,
          amount: 3335.4748755149926,
        },
        {
          month: 33,
          amount: 3444.06356270378,
        },
        {
          month: 34,
          amount: 3552.9237216105394,
        },
        {
          month: 35,
          amount: 3662.0560309145653,
        },
        {
          month: 36,
          amount: 3771.4611709918518,
        },
        {
          month: 37,
          amount: 3881.1398239193313,
        },
        {
          month: 38,
          amount: 3991.0926734791296,
        },
        {
          month: 39,
          amount: 4101.320405162827,
        },
        {
          month: 40,
          amount: 4211.8237061757345,
        },
        {
          month: 41,
          amount: 4322.603265441174,
        },
        {
          month: 42,
          amount: 4433.659773604776,
        },
        {
          month: 43,
          amount: 4544.993923038788,
        },
        {
          month: 44,
          amount: 4656.606407846385,
        },
        {
          month: 45,
          amount: 4768.497923866001,
        },
        {
          month: 46,
          amount: 4880.669168675666,
        },
        {
          month: 47,
          amount: 4993.120841597355,
        },
        {
          month: 48,
          amount: 5105.853643701348,
        },
        {
          month: 49,
          amount: 5218.868277810601,
        },
        {
          month: 50,
          amount: 5332.165448505128,
        },
      ],
    )
  })

  it('handles Quarterly interests', () => {
    assert.deepEqual(
      calculateSavings({
        initialSavings: 200,
        monthlySavings: 100,
        yearlyInterest: 5,
        interestRecurrency: 'Quarterly',
        months: 50,
      }),
      [
        {
          month: 1,
          amount: 300,
        },
        {
          month: 2,
          amount: 400,
        },
        {
          month: 3,
          amount: 500,
        },
        {
          month: 4,
          amount: 610,
        },
        {
          month: 5,
          amount: 710,
        },
        {
          month: 6,
          amount: 810,
        },
        {
          month: 7,
          amount: 910,
        },
        {
          month: 8,
          amount: 1026.8333333333333,
        },
        {
          month: 9,
          amount: 1126.8333333333333,
        },
        {
          month: 10,
          amount: 1226.8333333333333,
        },
        {
          month: 11,
          amount: 1326.8333333333333,
        },
        {
          month: 12,
          amount: 1450.6138888888888,
        },
        {
          month: 13,
          amount: 1550.6138888888888,
        },
        {
          month: 14,
          amount: 1650.6138888888888,
        },
        {
          month: 15,
          amount: 1750.6138888888888,
        },
        {
          month: 16,
          amount: 1881.4574537037035,
        },
        {
          month: 17,
          amount: 1981.4574537037035,
        },
        {
          month: 18,
          amount: 2081.4574537037033,
        },
        {
          month: 19,
          amount: 2181.4574537037033,
        },
        {
          month: 20,
          amount: 2319.481744598765,
        },
        {
          month: 21,
          amount: 2419.481744598765,
        },
        {
          month: 22,
          amount: 2519.481744598765,
        },
        {
          month: 23,
          amount: 2619.481744598765,
        },
        {
          month: 24,
          amount: 2764.8064403420776,
        },
        {
          month: 25,
          amount: 2864.8064403420776,
        },
        {
          month: 26,
          amount: 2964.8064403420776,
        },
        {
          month: 27,
          amount: 3064.8064403420776,
        },
        {
          month: 28,
          amount: 3217.5532143477785,
        },
        {
          month: 29,
          amount: 3317.5532143477785,
        },
        {
          month: 30,
          amount: 3417.5532143477785,
        },
        {
          month: 31,
          amount: 3517.5532143477785,
        },
        {
          month: 32,
          amount: 3677.845767920241,
        },
        {
          month: 33,
          amount: 3777.845767920241,
        },
        {
          month: 34,
          amount: 3877.845767920241,
        },
        {
          month: 35,
          amount: 3977.845767920241,
        },
        {
          month: 36,
          amount: 4145.809864052245,
        },
        {
          month: 37,
          amount: 4245.809864052245,
        },
        {
          month: 38,
          amount: 4345.809864052245,
        },
        {
          month: 39,
          amount: 4445.809864052245,
        },
        {
          month: 40,
          amount: 4621.573361786449,
        },
        {
          month: 41,
          amount: 4721.573361786449,
        },
        {
          month: 42,
          amount: 4821.573361786449,
        },
        {
          month: 43,
          amount: 4921.573361786449,
        },
        {
          month: 44,
          amount: 5105.266251149556,
        },
        {
          month: 45,
          amount: 5205.266251149556,
        },
        {
          month: 46,
          amount: 5305.266251149556,
        },
        {
          month: 47,
          amount: 5405.266251149556,
        },
        {
          month: 48,
          amount: 5597.020688668716,
        },
        {
          month: 49,
          amount: 5697.020688668716,
        },
        {
          month: 50,
          amount: 5797.020688668716,
        },
      ],
    )
  })

  it('Does not crash for negative values', () => {
    assert.deepEqual(
      calculateSavings({
        initialSavings: -200,
        monthlySavings: -100,
        yearlyInterest: -1,
        interestRecurrency: 'Quarterly',
        months: 50,
      }),
      [
        {
          month: 1,
          amount: -300,
        },
        {
          month: 2,
          amount: -400,
        },
        {
          month: 3,
          amount: -500,
        },
        {
          month: 4,
          amount: -598,
        },
        {
          month: 5,
          amount: -698,
        },
        {
          month: 6,
          amount: -798,
        },
        {
          month: 7,
          amount: -898,
        },
        {
          month: 8,
          amount: -994.6733333333334,
        },
        {
          month: 9,
          amount: -1094.6733333333334,
        },
        {
          month: 10,
          amount: -1194.6733333333334,
        },
        {
          month: 11,
          amount: -1294.6733333333334,
        },
        {
          month: 12,
          amount: -1390.0244222222223,
        },
        {
          month: 13,
          amount: -1490.0244222222223,
        },
        {
          month: 14,
          amount: -1590.0244222222223,
        },
        {
          month: 15,
          amount: -1690.0244222222223,
        },
        {
          month: 16,
          amount: -1784.0576741481482,
        },
        {
          month: 17,
          amount: -1884.0576741481482,
        },
        {
          month: 18,
          amount: -1984.0576741481482,
        },
        {
          month: 19,
          amount: -2084.057674148148,
        },
        {
          month: 20,
          amount: -2176.777481900988,
        },
        {
          month: 21,
          amount: -2276.777481900988,
        },
        {
          month: 22,
          amount: -2376.777481900988,
        },
        {
          month: 23,
          amount: -2476.777481900988,
        },
        {
          month: 24,
          amount: -2568.188223627985,
        },
        {
          month: 25,
          amount: -2668.188223627985,
        },
        {
          month: 26,
          amount: -2768.188223627985,
        },
        {
          month: 27,
          amount: -2868.188223627985,
        },
        {
          month: 28,
          amount: -2958.294262882558,
        },
        {
          month: 29,
          amount: -3058.294262882558,
        },
        {
          month: 30,
          amount: -3158.294262882558,
        },
        {
          month: 31,
          amount: -3258.294262882558,
        },
        {
          month: 32,
          amount: -3347.0999486729497,
        },
        {
          month: 33,
          amount: -3447.0999486729497,
        },
        {
          month: 34,
          amount: -3547.0999486729497,
        },
        {
          month: 35,
          amount: -3647.0999486729497,
        },
        {
          month: 36,
          amount: -3734.6096155107066,
        },
        {
          month: 37,
          amount: -3834.6096155107066,
        },
        {
          month: 38,
          amount: -3934.6096155107066,
        },
        {
          month: 39,
          amount: -4034.6096155107066,
        },
        {
          month: 40,
          amount: -4120.827583459004,
        },
        {
          month: 41,
          amount: -4220.827583459004,
        },
        {
          month: 42,
          amount: -4320.827583459004,
        },
        {
          month: 43,
          amount: -4420.827583459004,
        },
        {
          month: 44,
          amount: -4505.758158180807,
        },
        {
          month: 45,
          amount: -4605.758158180807,
        },
        {
          month: 46,
          amount: -4705.758158180807,
        },
        {
          month: 47,
          amount: -4805.758158180807,
        },
        {
          month: 48,
          amount: -4889.405630986871,
        },
        {
          month: 49,
          amount: -4989.405630986871,
        },
        {
          month: 50,
          amount: -5089.405630986871,
        },
      ],
    )
  })
})
