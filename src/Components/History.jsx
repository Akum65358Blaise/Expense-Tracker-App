import React, { useContext } from 'react';

import { Transaction } from './Transaction';

import { TransactionsContext } from '../Hooks/TransContext';

export const History = () => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    );
}