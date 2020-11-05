import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import api from '../../services/api';
import RevenuesRanking from '../../components/RevenuesRanking';
import TicketsRanking from '../../components/TicketsRanking';
import TransactionsList from '../../components/TransactionsList';



export default function Dashboard(){
    const [data, setData] = useState();

    useEffect(()=>{
        api.get().then(response=>{
            console.log(response.data);
            setData(response.data)
        })
    }, []);

    return(
        <div className="main-container">
            <Header/>
            <div className="content-container">
                <div className="summary-rankings-container">
                    <Summary summary={data.summary}/>
                    <div className="rankings-container">
                        <RevenuesRanking revenues={data.revenues_ranking}/>
                        <TicketsRanking tickets={data.tickets_ranking} />
                    </div>
                </div>
                <TransactionsList/>
            </div>
        </div>
    )
}