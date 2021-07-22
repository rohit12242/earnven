import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Web3 from "web3";
import { Typography } from "@material-ui/core";
export default function AccountBalance({fetchData}){
const [totalValue, settotalValue] = useState('00.00')
    
    useEffect(()=>{
        let total = 0;
        const web3 = new Web3();
        const accountAddress = localStorage.getItem('selected-account')
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
    },[totalValue,fetchData])
    return (
        <>
        <Typography variant='subtitle2'>${totalValue}</Typography>
        </>
    );
}