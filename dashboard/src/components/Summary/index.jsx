import React from 'react';
import './styles.css';
import icon from '../../assets/images/icon.png'
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
                    <div className="value">
                        <h1>{summary.today.revenues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
                        <img src={icon} alt=""/>

                    </div>
                </div>
                <div className="tickets">
                    <p>Tickets</p>
                    <div className="value">
                        <h1>{summary.today.tickets}</h1>
                        <img src={icon} alt=""/>
                    </div>
                </div>
            </div>
            <div className="totals">
                <div className="day">
                    <p>Yesterday</p>
                </div>
                <div className="revenue">
                    <h2 className="value-yesterday">{summary.yesterday.revenues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                </div>
                <div className="tickets">
                    <h2 className="value-yesterday">{summary.yesterday.tickets}</h2>
                </div>
            </div>
            

            
        </div>
    )
}