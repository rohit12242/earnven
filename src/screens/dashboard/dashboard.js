import React, { Component } from 'react';
import './dashboard.css';
import PortfolioPerf from './portfolioperf/portfolioperf';
import AllAssets from '../../components/allAssetsMini';
import TotalValueBox from '../../components/totalValueBox';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <div>
                    <div className='portfolio' style={{border:'1px',borderStyle:'solid',borderColor:'#737373',height:'360px',borderRadius:'7px'}}>
                        <p style={{color:'white', marginTop:'0',height:'0',paddingTop:'10px',paddingLeft:'10px'}}>Portfolio Performance</p>
                        <PortfolioPerf />
                    </div>
                    <div className='total-value'>
                            <TotalValueBox />
                        </div>
                </div>
                <div className='assets'>
                    <AllAssets />
                </div>
                
            </div>
        )
    }
}
