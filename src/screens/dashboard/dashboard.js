
// material
import { Container } from '@material-ui/core';
// components
import Page from '../../components/Page';
import AllAssetsMini from '../../components/allAssetsMini';
// import TotalValueBox from '../../components/totalValueBox';
// import DefiAssets from '../../components/defiAssets';
import PortfolioPerf from '../../components/portfolioperf/portfolioperf';
import Balance from '../../components/Balance';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    let {address} = useParams();

    return (
        <Page title="Dashboard">
            <Container maxWidth="xl">
                <Balance address={address}/>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <PortfolioPerf address={address}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <AllAssetsMini address={address}/><br />
                                <Link to={`/${address}/assets`} ><div style={{ float: 'right', color: 'white' }}>See More</div></Link>
                            </Grid>
                        </Grid>

                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} >
                                <TotalValueBox />
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <DefiAssets />
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Container>
        </Page>
    );
}

