import React from 'react';
import './styles.css';
export default function TicketsRanking(props){
    const tickets = props.tickets;
    
    //ordena o array de tickets do maior par ao menor de acordo com o total
    tickets.sort((a,b)=>(a.total<b.total)?1:((b.total<a.total)?-1:0));

    return(
        <div className="tickets-container">
            <div className="title">
                <p>Ranking</p>
                <h2>Tickets</h2>
                
            </div>
            {
                tickets.map(ticket=>{
                    return(
                        <div className="ticket">
                            <b className="store">{ticket.store_name}</b>
                            <p className="total">{ticket.total}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}