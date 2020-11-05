import React from 'react';
import './styles.css';

export default function Summary(props){

    const summary = props.summary;

    return(
        <div className="summary-container">
            <div className="totals">
                <div className="day">
                    <p>Today</p>
                </div>
                <div className="revenue">
                    <p>Revenues</p>
                    <h1 className="value">{summary.today.revenues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
                </div>
                <div className="tickets">
                    <p>Tickets</p>
                    <h1 className="value">{summary.today.tickets}</h1>
                </div>
            </div>
            <div className="totals">
                <div className="day">
                    <p>Yesterday</p>
                </div>
                <div className="revenue">
                    <h2 className="value">{summary.yesterday.revenues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                </div>
                <div className="tickets">
                    <h2 className="value">{summary.yesterday.tickets}</h2>
                </div>
            </div>
            

            
        </div>
    )
}