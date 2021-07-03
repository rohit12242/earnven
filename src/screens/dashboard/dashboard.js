import React, { Component } from 'react';
import './dashboard.css';
import PortfolioPerf from './portfolioperf/portfolioperf';
import AllAssets from '../../components/allAssetsMini';
import TotalValueBox from '../../components/totalValueBox';
import DefiAssets from '../../components/defiAssets';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                {/* <div>
                    <div className='portfolio'>
                        <p style={{color:'white', position:'absolute',top:'15px',left:'66px'}}>Portfolio Performance</p>
                        <PortfolioPerf />
                    </div>
                    <div className='total-value'>
                            <TotalValueBox />
                        </div>
                </div>
                <div className='assets'>
                    <AllAssets />
                </div> */}

                <div className='left-dashboard'>
                    <div>
                        <h3 style={{color:'#BB86FC',font:'Poppins',fontWeight:'600',style:'normal',fontSize:'40px',lineHeight:'1px'}} >$ 5,234.54</h3>
                        <p style={{color:'white',font:'Poppins',fontWeight:'500',style:'normal',fontSize:'16px',lineHeight:'1px'}}>+ 10.4%($207.65)</p>
                    </div>
                    <div>
                    </div>
                    <div className='portfolio'>
                        <p style={{ color: 'white', position: 'absolute', top: '15px', left: '66px' }}>Portfolio Performance</p>
                        <PortfolioPerf />
                    </div>
                    <div className='assets'>
                        <AllAssets />
                    </div>
                </div>
                <div className='right-dashboard'>
                    <div className='total-value'>
                        <TotalValueBox />
                    </div>
                    <div className='defi-assets' style={{marginTop:'10px'}}>
                        <DefiAssets />
                    </div>
                </div>

            </div>
        )
    }
}
