import React, { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const intialTransactions = {
    transactions: []
}

export const TransactionsContext = createContext(intialTransactions);

export const TransactionsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransReducer, intialTransactions);

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <TransactionsContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </TransactionsContext.Provider>
    );

}