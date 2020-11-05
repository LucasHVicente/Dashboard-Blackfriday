import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png'

export default function Header(){
    return (
        <div className="header-container">
            <img src={logo} alt="Logo"/>
            <h1>BLACKFRIDAY<b>2020</b> </h1>
        </div>
    )
}