import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';

import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import { Divider } from '@material-ui/core';
// import { useParams } from 'react-router-dom';


import './app.css';


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE+15 ,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP ,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    }
}));


export default function AppLayout() {
    const [open, setOpen] = useState(false);
    // const {address} = useParams();
    return (
        <RootStyle>
            <Header onOpenSidebar={() => setOpen(true)} />
             <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} address={localStorage.getItem('selected-account')} />
            <MainStyle>
            <Divider variant='middle' />
                <Outlet />
            </MainStyle>
        </RootStyle>

        /* < div className='flex-container' >
            <div className='sidebar-wrapper'>
                <Sidebar />
            </div>
            <div className='main-wrapper'>
                <div className='header-wrapper'>
                    <Header />
                </div>
                <hr style={{ position: 'relative', borderTop: '0', borderBottomColor: '#737373', marginTop: '42px', marginLeft: '61px', marginRight: '342px' }}></hr>
 
                <div className='dashboard-wrapper'>
                    <Outlet />
                </div>
            </div>
 
        </div > */
    );
}