import React from 'react';
import './styles.css'
export default function TransactionsList(props){

    const transactions = props.transactions;

    transactions.map(transaction=>{
        transaction.date = new Date(transaction.date)
    })

    //função que retorna o horario da maneira correta para ser exibido
    function getTransactionTime(date){
        let hour = date.getHours();
        hour<10? hour = '0'+hour: hour =hour;

        let minutes = date.getMinutes();
        minutes<10? minutes = '0'+minutes: minutes =minutes;
        
        return hour+':'+minutes;
    }

    return(
        <div className="transactions-container">
            <h2>Transactions</h2>
            {
                transactions.map(transaction=>{
                    return(
                        <div className="transaction" key={transaction.id}>
                            <div className="desc">
                                <p className="store">{transaction.store_name}</p>
                                <p className="date">{getTransactionTime(transaction.date)}</p>
                            </div>
                            <b className="total">{transaction.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</b>
                        </div>
                    )
                })
            }
        </div>
    )
}