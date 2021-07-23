/* import React from 'react'
import WalletSelector from '../components/WalletSelector'
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {

    const navigate = useNavigate();

    async function enterApp() {
        const web3 = window.web3;
        if (web3.eth) {
            navigate('/app/dashboard')
        }
        else {
            alert('Wallet Not Connected')
        }
    }

    return (
        <>
            <center>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                </link>
                <div style={{ backgroundColor: '#141A1E', color: 'white', height: 'auto', width: '1000px', paddingBottom: '50px' }}>


                    <br /><br />
                    Landing Page
                    <br /><br />

                    <WalletSelector />

                    <br /><br />

                    <Button variant="primary" onClick={enterApp} >
                        Enter App
                    </Button>

                </div>
            </center>

        </>
    )
} */


import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import ConnectWallet from "../components/ConnectWallet";



export default function LandingPage(params) {
    const navigate = useNavigate();
    const [shoWalletComponent, setshoWalletComponent] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('selected-account')) {
            const address = localStorage.getItem('selected-account')
            navigate(`/${address}/dashboard`)
        }
        else {
            setshoWalletComponent(true)
        }

    }, [navigate])

  
   

    return (
        <div>
            {shoWalletComponent && <ConnectWallet />}
        </div>
    );


}