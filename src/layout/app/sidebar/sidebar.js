// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import './sidebar.css'





/* export default class Sidebar extends Component{
  constructor(){
    super();
    this.state={
      subNav:false
    };
    this.showSubNav = this.showSubNav.bind(this);
  }
  showSubNav(){
    this.setState({subNav:!this.state.subNav});
  }
  render() {
    return(
      <div >
      <div className='sideBar'>
        <Account />
          <div className='left-menu'>
              <Link to='/app/dashboard' className='nav-element'><img src={dashboardLogo} alt="dashboardLogo" className='logo' /><span className='nav-text'>Dashboard</span></Link>            
              <Link to='/app/history' className='nav-element'><img src={historyLogo} alt="historyLogo" className='logo'/> <span className='nav-text'>History</span></Link>            
              <Link to='/app/defimadeesy' className='nav-element'><img src={defiMadeEasyLogo} alt="defiMadeEasyLogo" className='logo'/> <span className='nav-text'>Defi made easy</span></Link>
              <Link to='/app/trading' className='nav-element'><img src={tradingLogo} alt="tradingLogo" className='logo'/> <span className='nav-text'>Trading</span></Link>
              <Link to='/app/bridge' className='nav-element'><img src={bridgeLogo} alt="bridgeLogo" className='logo'/> <span className='nav-text'>Bridge</span></Link>
              <Link to='/app/safefarm' className='nav-element'><img src={safeFarmsLogo} alt="safeFarmsLogo" className='logo'/> <span className='nav-text'>Safe farms</span></Link>
              <Link to='/app/multisender' className='nav-element'><img src={multiSenderLogo} alt="multiSenderLogo" className='logo'/> <span className='nav-text'>Multisender</span></Link>
              <div className={this.state.subNav ? 'products-bg':''}>
                <div  className='nav-element' onClick={this.showSubNav}>
                  <img src={pylonProductsLogo} alt="pylonProductsLogo" className='logo'/>
                    <span className='nav-text'>Pylon products</span>
                    {this.state.subNav?  <RiIcons.RiArrowUpSLine className='icons'/> : <RiIcons.RiArrowDownSLine className='icons' />}
                  </div>
                  {this.state.subNav && 
                    <div className='product-element'>

                      <a href='https://pylon.finance/' target='_blank' rel="noreferrer" className='drop-element'><span className='nav-text'>Pylon Finance</span><RiIcons.RiExternalLinkLine className='icons'/></a>
                      <a href='https://www.darkpylon.com/' target='_blank' rel="noreferrer" className='drop-element'><span className='nav-text'>Dark Pylon</span><RiIcons.RiExternalLinkLine className='icons'/></a>

                    </div>
                  }
                </div>

              <div className='company-logo'>
                  <img src={pylonLogo} alt="pylonLogo"/>
              </div>
          </div>
        </div>
      </div>
    );
  }

} */

// import pylonProductsLogo from '../../../assets/icons/pylonproducts.png';
// import pylonLogo from '../../../assets/icons/pylonlogo.png';
// import * as RiIcons from "react-icons/ri";
// import Account from './account/account';

import Scrollbar from '../../../components/Scrollbar';
import sidebarConfig from '../SidebarConfig';
import NavSection from '../../../components/NavSection';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@material-ui/core';
import { Box, Link, Drawer, Typography, Avatar } from '@material-ui/core';

import accountLogo from '../../../assets/icons/accountlogo.png';

import {MHidden} from '../../../components/@material-extend';


const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  
}));

Sidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};


export default function Sidebar({ isOpenSidebar, onCloseSidebar }){
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        backgroundColor:'#000',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >
      {/* <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <Logo />
        </Box>
      </Box> */}

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={accountLogo} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Test Account
              </Typography>
              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography> */}
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200'
          }}
        >
          <Box
            component="img"
            src="/static/illustrations/illustration_rocket.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button
            fullWidth
            href="https://material-ui.com/store/items/minimal-dashboard/"
            target="_blank"
            variant="contained"
          >
            Upgrade to Pro
          </Button>
        </Stack>
        </Box> */}
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );

}
