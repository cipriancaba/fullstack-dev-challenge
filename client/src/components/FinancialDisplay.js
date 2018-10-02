import React from 'react'
import DisplayGraph from './DisplayGraph'
import './FinancialDisplay.css'

export class FinancialDisplay extends React.PureComponent {
  render() {
    return (
      <div className="fmz-display">
        <DisplayGraph data={this.props.calculations} />
        <h1>Savings by month </h1>
        <div className="months">
          {this.props.calculations.map(month => (
            <div key={month.month} className="month">
              <span>{`Month ${month.month}: ${month.amount.toFixed(2)}`}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
