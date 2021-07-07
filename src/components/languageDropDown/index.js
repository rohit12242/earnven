/* import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {data} from '../../globalStore';
import globe from '../../assets/icons/globe.svg'

export default class MenuListComposition extends React.Component {

  constructor(){
    super()
    this.state = {
      open: false,
      lanuage:'',
    };
  }
  

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return ;
    }

    this.setState({ open: false });
  };

  handleLanguageChange = (val) =>{
    data.language = val;
    return
  }

  render() {
    
    const { open } = this.state;

    return (
        <div>
          
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
          <img src={globe} alt='gasIcon'></img> <font color='white'>&nbsp; {data.language} &#8681; </font> &nbsp;&nbsp;&nbsp; 
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleLanguageChange('DT')}} >DT</MenuItem>
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleLanguageChange('EN')}}>EN</MenuItem>
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleLanguageChange('FR')}}>FR</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
    );
  }
}

 */


import { useRef, useState } from 'react';
// material
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
// components
import MenuPopover from "../../components/MenuPopover";
import globe from '../../assets/icons/globe.svg'
import languageImg from '../../assets/icons/language.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'EN',
    icon: '/static/icons/language.svg'
  },
  {
    value: 'dt',
    label: 'DT',
    icon: '/static/icons/language.svg'
  },
  {
    value: 'fr',
    label: 'FR',
    icon: '/static/icons/language.svg'
  }
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <img src={globe} alt=""/><ExpandMoreIcon style={{color:'#fff'}}/>
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={handleClose}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={languageImg} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2',color:'#fff' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
