
import { Box,Typography } from "@material-ui/core";
// import AccountBalance from "./AccountBalance";

import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Web3 from "web3";


export default function Balance({address}) {
    const [totalValue, settotalValue] = useState('00.00')

    useEffect(()=>{
        let total = 0;
        const web3 = new Web3();
        // const accountAddress = localStorage.getItem('selected-account')
        const accountAddress = address;
        console.log("account address :::",accountAddress)
        const totalAccountValue = async () =>{
            try{
                const path = 'https://api.ethplorer.io/getAddressInfo/'+accountAddress+'?apiKey=EK-qSPda-W9rX7yJ-UY93y'
                const response = await axios.get(path);
                let tokens = response.data.tokens;
                total= (response.data.ETH.price.rate)*(web3.utils.fromWei(response.data.ETH.rawBalance,'ether'));
                if(tokens!==undefined){
                    for(var i = 0; i<tokens.length; i++){       
                        if(tokens[i].tokenInfo.price!==false){
                            total = total + (tokens[i].tokenInfo.price.rate)*(web3.utils.fromWei(tokens[i].rawBalance,'ether'));
                            
                        } 
                    }
                }
                settotalValue(total.toFixed(2))
            }
            catch(error){
                console.log(error);
            }
        }
         totalAccountValue();
    },[totalValue,address])
    return (
        <Box sx={{ pb: 5 }}>
            <Typography variant="h3" sx={{color:'primary.main'}}>${totalValue}</Typography>
            <Typography variant="subtitle1" sx={{color:'common.white'}}>+ 10.4%($207.65)</Typography>
        </Box>
    );
}