// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balDetails} = props
  const {balance, expenses, income} = balDetails

  return (
    <div className="main-container-list-item">
      <div className="your-balance-amt box-1">
        <div className="your-bal-flex-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="your-bal-img"
          />
          <div className="your-bal-sub-container">
            <p className="your-bal-text">Your Balance</p>
            <p className="amount"> RS {balance}</p>
          </div>
        </div>
      </div>
      <div className="your-balance-amt box-2">
        <div className="your-bal-flex-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="your-bal-img"
          />
          <div className="your-bal-sub-container">
            <p className="your-bal-text">Your Balance</p>
            <p className="amount"> RS {expenses}</p>
          </div>
        </div>
      </div>
      <div className="your-balance-amt box-3">
        <div className="your-bal-flex-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="your-bal-img"
          />
          <div className="your-bal-sub-container">
            <p className="your-bal-text">Your Balance</p>
            <p className="amount"> RS {income}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
