import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    income: 6868,
    expenses: 0,
    balance: 453,
    transactionType: 'income',
    transactionList: [],
    title: '',
    amount: '',
  }

  onChangeTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChengeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onUpdateBalance = (amount, transactionType) => {
    if (transactionType === 'income') {
      this.setState(prevState => ({
        balance: prevState.balance + amount,
        income: prevState.income + amount,
      }))
    } else if (transactionType === 'expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses + amount,
        balance: prevState.balance - amount,
      }))
    }
  }

  onDeleteHistoryItem = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachOne => id !== eachOne.id,
      ),
    }))
  }

  onAddTransaction = event => {
    const {amount, title, transactionType} = this.state
    event.preventDefault()
    const newTransaction = {
      id: v4(),
      amount,
      title,
      transactionType,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
    }))
  }

  onRefreshingBalance = () => {
    const {transactionList} = this.state
    transactionList.map(eachOne => this.onUpdateBalance(eachOne))
  }

  render() {
    const {transactionList, income, expenses, balance} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="account-holder-details">
            <h1 className="account-holder-name">Hi, Richard</h1>
            <p className="welcome-note">
              Welcome back to you!{' '}
              <span className="welcome-note-span">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails balDetails={{balance, expenses, income}} />
          </div>
          <div className="transaction-and-history-container">
            <form
              className="add-transaction-card"
              onSubmit={this.onAddTransaction}
            >
              <h1 className="form-heading">Add Transaction</h1>
              <lable className="label" htmlFor="title">
                TITLE
              </lable>
              <input
                onChange={this.onChangeTitle}
                id="title"
                type="input"
                className="input"
                placeholder="TITLE"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                className="input"
                id="anount"
                placeholder="AMOUNT"
                onChange={this.onChengeAmount}
                type="input"
              />
              <label htmlFor="typeSelect" className="label">
                TYPE
              </label>
              <select
                id="typeSelect"
                onChange={this.onChangeTransactionType}
                className="type-select"
              >
                <option selected>income</option>
                <option>expenses</option>
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="list-container">
                <li className="list-item">
                  <p className="column-heaing">title</p>
                  <p className="column-heaing">Amount</p>
                  <p className="column-heaing">Type</p>
                  <p className="column-heaing"> </p>
                </li>
                {transactionList.map(eachOne => (
                  <TransactionItem
                    onDeleteHistoryItem={this.onDeleteHistoryItem}
                    onUpdateBalance={this.onUpdateBalance}
                    eachOne={eachOne}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
