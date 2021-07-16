
import { Box, Typography, Grid, Button, Stack,TextField } from "@material-ui/core";
import metamask from '../assets/icons/metamask.svg';
import walletConnectLogo from '../assets/icons/walletconnect-logo.svg'
import trustWalletLogo from '../assets/icons/TWT.svg'
import fortmaticLogo from '../assets/icons/fortmatic.png'
import coinbaseWalletLogo from '../assets/icons/coinbase-wallet.png'
import torusWalletLogo from '../assets/icons/torus.png';

export default function ConnectWallet() {
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
                        <Button variant='contained' sx={{ backgroundColor: (theme) => (theme.palette.primary.dark) }} disableElevation fullWidth startIcon={<img src={metamask} alt="" style={{ height: '14px', width: '14px' }}></img>} >MetaMask</Button>

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
                            <TextField fullWidth placeholder="Track any ethereum address" id="fullWidth" />
                        </Box>

                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
}