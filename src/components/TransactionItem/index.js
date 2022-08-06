// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachOne, onDeleteHistoryItem} = props
  const {amount, title, transactionType, id} = eachOne

  const onClickDelete = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="history-list-item">
      <p className="history-item-detail">{title}</p>
      <p className="history-item-detail">{amount}</p>
      <p className="history-item-detail">{transactionType}</p>
      <button type="button" onClick={onClickDelete} className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
