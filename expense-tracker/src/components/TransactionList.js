import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

function TransactionList() {

    const { transactions, deleteTransaction } = useContext(GlobalContext);

    const allTransactions = transactions.map((transaction) => {
        let transactionAmount;
        let borderClass;
        if (transaction.amount < 0) {
            transactionAmount = '-$' + Math.abs(transaction.amount)
            borderClass = "minus";
        } else {
            transactionAmount = '$' + transaction.amount;
            borderClass = "plus";
        }

        return (
            <li className={borderClass} key={transaction.id}>
                {transaction.text} <span>
                    {transactionAmount}
                </span><button onClick={() => { deleteTransaction(transaction.id) }} className="delete-btn">x</button>
            </li>
        )
    })

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {allTransactions}
            </ul>
        </div>
    )
}

export default TransactionList
