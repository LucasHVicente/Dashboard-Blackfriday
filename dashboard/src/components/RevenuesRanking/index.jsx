import React from 'react';
import './styles.css';
export default function RevenuesRanking(props){
    const revenues = props.revenues;
    //ordena o array de revenues do maior para o menor de acordo com o valor total
    revenues.sort((a,b)=>(a.total<b.total)?1:((b.total<a.total)?-1:0));

    return(
        <div className="revenues-container">
            <div className="title">
                <p>Ranking</p>
                <h2>Revenues</h2>
                
            </div>
            {
                revenues.map(revenue=>{
                    return(
                        <div className="revenue" key={revenue.id}>
                            <b className="store">{revenue.store_name}</b>
                            <p className="total">{revenue.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}