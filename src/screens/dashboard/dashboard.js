/* import React, { Component } from 'react';
import './dashboard.css';
import PortfolioPerf from './portfolioperf/portfolioperf';
import AllAssets from '../../components/allAssetsMini';
import TotalValueBox from '../../components/totalValueBox';
import DefiAssets from '../../components/defiAssets';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
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
 */


// material
// import { Box, Grid, Container, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
// components
import Page from '../../components/Page';
import AllAssets from '../../components/allAssetsMini';
import TotalValueBox from '../../components/totalValueBox';
import DefiAssets from '../../components/defiAssets';
import PortfolioPerf from '../../components/portfolioperf/portfolioperf';
import Balance from '../../components/Balance';
import './dashboard.css';
import { Grid } from '@material-ui/core';

export default function Dashboard() {
    return (
        <Page title="Dashboard | Minimal-UI">

            <Container maxWidth="xl">
                {/* <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">$ 5,234.54</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <PortfolioPerf />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TotalValueBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AllAssets />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DefiAssets />
                    </Grid>
                </Grid> */}
                {/* <div className='dashboard'>
                    
                    <div className='left-dashboard'>
                        <div>
                            <h3 style={{ color: '#BB86FC', font: 'Poppins', fontWeight: '600', style: 'normal', fontSize: '40px', lineHeight: '1px',display:'contents' }} >$ 5,234.54</h3>
                            <p style={{ color: 'white', font: 'Poppins', fontWeight: '500', style: 'normal', fontSize: '16px', lineHeight: '1px',marginTop:'9px' }}>+ 10.4%($207.65)</p>
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
                        <div className='defi-assets' style={{ marginTop: '10px' }}>
                            <DefiAssets />
                        </div>
                    </div>

                </div> */}

                <Balance />
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <PortfolioPerf />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <AllAssets />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} >
                                <TotalValueBox />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <DefiAssets />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}

