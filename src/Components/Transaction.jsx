import React, { useContext } from 'react';

import { TransactionsContext } from '../Hooks/TransContext';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(TransactionsContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    );
}