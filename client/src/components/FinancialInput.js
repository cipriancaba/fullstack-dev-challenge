import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput } from './CurrencyInput'
import { SliderInput } from './SliderInput'
import { SelectInput } from './SelectInput'
import {
  TOTAL_MONTHS,
  DEFAULT_INITIAL_SAVINGS,
  DEFAULT_MONTHLY_SAVINGS,
  DEFAULT_YEARLY_INTEREST,
  DEFAULT_RECCURENCY,
  RECURRENCY_VALUES,
} from '../constants'

export class FinancialInput extends React.PureComponent {
  state = {
    initialSavings: DEFAULT_INITIAL_SAVINGS,
    monthlySavings: DEFAULT_MONTHLY_SAVINGS,
    yearlyInterest: DEFAULT_YEARLY_INTEREST,
    interestRecurrency: DEFAULT_RECCURENCY,
    months: TOTAL_MONTHS,
  }

  updateVariables = variables => {
    this.setState(variables, () => {
      this.props.onVariablesUpdated(this.state)
    })
  }

  componentDidMount = () => {
    this.props.onVariablesUpdated(this.state)
  }

  render() {
    return (
      <div className="financial-inputs">
        <p className="input-label">How much have you saved?</p>
        <CurrencyInput
          value={this.state.initialSavings}
          onChange={initialSavings => this.updateVariables({ initialSavings })}
        />

        <p className="input-label">How much will you save each month?</p>
        <CurrencyInput
          value={this.state.monthlySavings}
          onChange={monthlySavings => this.updateVariables({ monthlySavings })}
        />

        <p className="input-label">How much interest will you earn per year?</p>
        <SliderInput
          value={this.state.yearlyInterest}
          onChange={yearlyInterest => this.updateVariables({ yearlyInterest })}
        />

        <p className="input-label">How often is the interest rate paid?</p>
        <SelectInput
          value={this.state.interestRecurrency}
          values={RECURRENCY_VALUES}
          onChange={interestRecurrency =>
            this.updateVariables({ interestRecurrency })
          }
        />
      </div>
    )
  }
}

FinancialInput.propTypes = {
  onVariablesUpdated: PropTypes.func,
}
