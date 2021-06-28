import React from 'react';
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

