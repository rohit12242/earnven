import React, { Component } from 'react';
import './dashboard.css';
import PortfolioPerf from './portfolioperf/portfolioperf';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <div className='portfolio' style={{border:'1px',borderStyle:'solid',borderColor:'#737373',height:'360px',borderRadius:'7px'}}>
                    <p style={{color:'white', marginTop:'0',height:'0',paddingTop:'10px',paddingLeft:'10px'}}>Portfolio Performance</p>
                    <PortfolioPerf />
                </div>
            </div>
        )
    }
}
