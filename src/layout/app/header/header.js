/* import React,{Component} from 'react';
import SearchInput from '../../../components/searchInput';
import NetworkDropDown from '../../../components/networkDropDown';
import MenuListComposition from '../../../components/gasDropDownMenu';
import LanguageDropDown from '../../../components/languageDropDown';
import HelpDropDown from '../../../components/helpDropDown';
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='search-bar'>
                     <SearchInput placeholder='Search Tokens...'/>
                </div>
                <div className='network-dropdown'>
                    <NetworkDropDown />
                </div>
                <div className='gas-dropdown'>
                    <MenuListComposition/>
                </div>
                <div className='language-dropdown'>
                    <LanguageDropDown />
                </div>
                <div className='help-dropdown'>
                    <HelpDropDown />
                </div>
                
            
            </div>
        )
    }
} */




import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@material-ui/core';
// components
import {MHidden} from '../../../components/@material-extend';
import SearchInput from '../../../components/searchInput';
import NetworkDropDown from '../../../components/networkDropDown';
import MenuListComposition from '../../../components/gasDropDownMenu';
import LanguageDropDown from '../../../components/languageDropDown';
import HelpDropDown from '../../../components/helpDropDown';


const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    // backgroundColor: theme.palette.gradients.success,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
    }
  }));

  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  }));

  Header.propTypes = {
    onOpenSidebar: PropTypes.func
  };

  export default function Header({ onOpenSidebar }) {
    return (
      <RootStyle>
        <ToolbarStyle>
          <MHidden width="lgUp">
            <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
              <Icon icon={menu2Fill} />
            </IconButton>
          </MHidden>
  
          <SearchInput />
          <Box sx={{ flexGrow: 1 }} />
  
          <Stack direction="row" spacing={{ xs: 1.5, sm: 3.5 }}>
            <NetworkDropDown />
            <MenuListComposition />
            <LanguageDropDown/>
            <HelpDropDown />
          </Stack>
        </ToolbarStyle>
        
      </RootStyle>
    );
  }