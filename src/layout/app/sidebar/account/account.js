

import { experimentalStyled as styled } from '@material-ui/core/styles';
import accountLogo from '../../../../assets/icons/accountlogo.png';
import { Box, Typography, Avatar, MenuItem, ListItemIcon, ListItemText, Stack, Divider } from '@material-ui/core';
import { useState, useRef } from 'react';
import MenuPopover from '../../../../components/MenuPopover'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RiSettings5Line } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import './account.css';
import { useNavigate } from 'react-router-dom';
const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadiusSm,
    paddingBottom: 0,

}));


export default function Account() {
    const navigate = useNavigate();
    const anchorRef = useRef(null)
    const [account, setaccount] = useState(false)

    /* useEffect(()=>{
        
        async function getAccounts(){
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
              }
              else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
              }
              else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
              }
            const web3 = window.web3;
            console.log("test web3::",web3)
            const accounts = await web3.eth.getAccounts();
            console.log("test accounts::",accounts)
            selectedAccount = accounts[0];
            console.log('selected account',selectedAccount)
        }
        getAccounts();
        console.log("test account::",selectedAccount)
    },[]) */

    const showAccountPopover = () => {
        setaccount(true);
    }
    const hideAccountPopover = () => {
        setaccount(false);
    }

    const routeToConnectWallet = () => {
        navigate('/app/connect-wallet')
        setaccount(false);
    }

    function shortaddress(addy) {
        if (addy === '') {
            return addy
        }
        var l = addy.length
        var addynew = addy[0] + addy[1] + addy[2] + addy[3] + addy[4] + addy[5] + '...' + addy[l - 4] + addy[l - 3] + addy[l - 2] + addy[l - 1]
        return addynew
    }

    function shortaddress1(addy) {
        if (addy === '') {
            return addy
        }
        var l = addy.length
        var addynew = addy[0] + addy[1] + addy[2] + addy[3] + addy[4] + addy[5] + addy[6] + addy[7] + addy[8] + '...' + addy[l - 8] + addy[l - 7] + addy[l - 6] + addy[l - 5] + addy[l - 4] + addy[l - 3] + addy[l - 2] + addy[l - 1]
        return addynew
    }


    return (
        <div>
            <AccountStyle ref={anchorRef} onClick={showAccountPopover}>
                <Avatar src={accountLogo} alt="photoURL" />
                <Box sx={{ ml: 2 }}>
                    <Stack direction='row'>
                        <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                            {shortaddress(localStorage.getItem('selected-account'))}
                        </Typography>
                        <ExpandMoreIcon style={{ color: 'fff' }} />
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        developer1
                    </Typography>
                </Box>
            </AccountStyle>
            <MenuPopover open={account} onClose={hideAccountPopover} anchorEl={anchorRef.current}>
                <Box sx={{ py: 1 }}>
                    <MenuItem onClick={hideAccountPopover} sx={{ py: 1, px: 2.5 }}>
                        <ListItemText primaryTypographyProps={{ variant: 'body2', color: '#fff' }}>
                            {shortaddress1(localStorage.getItem('selected-account'))}
                        </ListItemText>
                    </MenuItem>
                    <Divider variant="middle" />
                    <MenuItem onClick={routeToConnectWallet} sx={{
                        py: 1, px: 1, mx: 2,my:1, borderRadius: '8px', background: (theme) => theme.palette.gradients.custom
                    }} >
                        <ListItemIcon sx={{ mr: 1, minWidth: '17px' }}>
                            <VscAdd style={{ color: 'fff' }} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ variant: 'body2', color: '#fff' }}>
                            Add Account
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={hideAccountPopover} sx={{
                        py: 1, px: 1, mx: 2, borderRadius: '8px', background: (theme) => theme.palette.gradients.custom
                    }} >
                        <ListItemIcon sx={{ mr: 1, minWidth: '17px' }}>
                            <RiSettings5Line style={{ color: 'fff' }} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ variant: 'body2', color: '#fff' }}>
                            Manage account
                        </ListItemText>
                    </MenuItem>
                </Box>
            </MenuPopover >
        </div>
    );
}