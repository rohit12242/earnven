import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TransparentButton from '../../components/TransparentButton';
import EthereumIcon from '../../assets/icons/ethereum.svg'
import BinanceIcon from '../../assets/icons/binance.svg'
import Solana from '../../assets/icons/solana.svg'
import Polkadot from '../../assets/icons/polkadot.svg'
import Polygon from '../../assets/icons/polygon.svg'

import {data} from '../../globalStore'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100px',
    background:'transparent'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    background:'transparent'
  },
}));

// function nothing(){
//     return
// }


export default function SimpleAccordion() {
  const classes = useStyles();

  const [network, setNetwork] = useState(EthereumIcon)

  return (
    <div className={classes.root}>
      <Accordion style={{background:'transparent',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
        <img src={network} alt=''></img>
        {/* <font color='white'>{network.charAt(0).toUpperCase()+network.slice(1)}</font> */}
          

        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'transparent', width:'150px'}}>
          <ul style={{listStyleType:'none'}}>
            <li>
              <TransparentButton
              onClick={(e)=>{data.network='ethereum';setNetwork(EthereumIcon)}}
              value={<><img src={EthereumIcon} alt='' height='25px'></img> &nbsp; <span style={{fontSize:'18px'}}>Ethereum</span></>}/> 
            </li>

            <li> 
              <TransparentButton aria-controls="panel1a-content" 
              onClick={(e)=>{data.network='binance';setNetwork(BinanceIcon)}}
              value={<><img src={BinanceIcon} alt='' height='25px'></img> &nbsp; <span style={{fontSize:'18px'}}>Binance Smart Chain</span></>}/>
            </li>
            <li> 
              <TransparentButton 
              onClick={(e)=>{data.network='solana';setNetwork(Solana)}}
              value={<><img src={Solana} alt='' height='25px'></img> &nbsp; <span style={{fontSize:'18px'}}>Solana</span></>}/>
            </li>
            <li> 
              <TransparentButton 
              onClick={(e)=>{data.network='polkadot';setNetwork(Polkadot)}}
              value={<><img src={Polkadot} alt='' height='25px'></img> &nbsp; <span style={{fontSize:'18px'}}>Polkadot</span></>}/>
            </li>
            <li> 
              <TransparentButton 
              onClick={(e)=>{data.network='polygon';setNetwork(Polygon)}}
              value={<><img src={Polygon} alt='' height='25px'></img> &nbsp; <span style={{fontSize:'18px'}}>Polygon</span></>}/>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      

    </div>
  );
}
