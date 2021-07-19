
import { Box, Typography, Grid, Button, Stack, TextField } from "@material-ui/core";
import metamask from '../assets/icons/metamask.svg';
import walletConnectLogo from '../assets/icons/walletconnect-logo.svg'
import trustWalletLogo from '../assets/icons/TWT.svg'
import fortmaticLogo from '../assets/icons/fortmatic.png'
import coinbaseWalletLogo from '../assets/icons/coinbase-wallet.png'
import torusWalletLogo from '../assets/icons/torus.png';
import Web3 from "web3";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function ConnectWallet() {
    const navigate = useNavigate();
    const [address, setstate] = useState('')
    const [errorMsg, seterrorMsg] = useState(false)

    const loadMetamask = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            const accounts = await window.web3.eth.getAccounts();
            routeToDashboard(accounts[0], 'metamask');
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)

        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    const routeToDashboard = async (account, provider) => {
        let existingWallet = localStorage.getItem('wallets');
        // let parsedExistingWallet = JSON.parse(existingWallet)
        // console.log('parsed wallet existing',parsedExistingWallet)
        const newWallet = {
            address: account,
            provider: provider,

        }
        console.log("see new wallet::",newWallet)
        let newDetails = [];
        if (existingWallet == null) {
            newDetails.push(JSON.stringify(newWallet));
            console.log("see new details::",newDetails)
        }
        else {
            newDetails.push(existingWallet);
            newDetails.push(JSON.stringify(newWallet))
        }

        localStorage.setItem('wallets', newDetails)
        localStorage.setItem('selected-account', account);
        navigate('/app/dashboard')
    }

    const addressUpdate = (e) => {

        setstate(e.target.value)
    }

    const trackAddress = () => {
        let validAddress = Web3.utils.isAddress(address);
        if (validAddress) {
            routeToDashboard(address, null);
            seterrorMsg(false)
        }
        else {
            seterrorMsg(true);
        }

    }

    const ErrorComponent = (props) => {
        const isWrongAddress = props.isWrongAddress;
        if (isWrongAddress) {
            return (<Typography
                variant='caption'
                sx={{ color: (theme) => (theme.palette.error.light) }} >
                Invalid Ethereum address
            </Typography>);
        }
        else {
            return null;
        }
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item >
                <Box sx={{ mt: 2 }}>
                    <Typography variant='h3' >Connect To Earnven</Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant='caption'>Connect Wallet</Typography>
                        <Button variant='contained'
                            sx={{ backgroundColor: (theme) => (theme.palette.primary.dark) }}
                            onClick={loadMetamask}
                            disableElevation
                            fullWidth
                            startIcon={<img src={metamask} alt="" style={{ height: '14px', width: '14px' }}></img>} >
                            MetaMask
                        </Button>

                        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                            <Button variant='outlined' startIcon={<img src={walletConnectLogo} alt="" style={{ height: '14px', width: '14px' }}></img>}>WalletConnect</Button>
                            <Button variant='outlined' startIcon={<img src={trustWalletLogo} alt="" style={{ height: '14px', width: '14px' }}></img>}>Trust</Button>
                            <Button variant='outlined' startIcon={<img src={coinbaseWalletLogo} alt="" style={{ height: '14px', width: '14px' }}></img>}>Coinbase Wallet</Button>
                        </Stack>
                        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                            <Button variant='outlined' startIcon={<img src={fortmaticLogo} alt="" style={{ height: '14px', width: '14px' }}></img>}>Fortmatic</Button>
                            <Button variant='outlined' startIcon={<img src={torusWalletLogo} alt="" style={{ height: '14px', width: '14px' }}></img>}>Torus Wallet</Button>
                        </Stack>
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='caption'>Track any address</Typography>
                            <Stack direction='row' spacing={1}>
                                <TextField
                                    fullWidth
                                    placeholder="Track any ethereum address"
                                    id="fullWidth"
                                    onChange={addressUpdate}
                                />
                                <Button variant='contained' onClick={trackAddress}><FaArrowRight /></Button>
                            </Stack>
                            <ErrorComponent isWrongAddress={errorMsg}></ErrorComponent>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
}