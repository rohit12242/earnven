// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { experimentalStyled as styled } from '@material-ui/core/styles';

import Sidebar from './sidebar/sidebar';
import Header from './header/header';

import './app.css';

// const RootStyle = styled('div')({
//     display: 'flex',
//     minHeight: '100%',
//     overflow: 'hidden'
// });

export default function AppLayout() {

    return (
        /* <RootStyle>
        <Header  />
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </RootStyle> */

        < div className='flex-container' >
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

        </div >
    );
}