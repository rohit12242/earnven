import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import axios from 'axios'
import {data} from '../../globalStore';
import gas from '../../assets/icons/gas.svg'

export default class MenuListComposition extends React.Component {

  async componentWillMount(){
    await this.loadGasPrices();
  }

  loadGasPrices = async() => {
    
    await axios.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=CISZAVU4237H8CFPFCFWEA25HHBI3QKB8W',{},{})
        .then(async(response) => {
            console.log(response)
            this.state.gasData = response.data.result;
            data.gasSelected = response.data.result.ProposeGasPrice;
            this.setState({gasData: response.data.result})
            
    })

  }
  constructor(){
    super()
    this.state = {
      open: false,
      gasData:{},
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

  handleGasDataChange = (val) =>{
    data.gasSelected = val;
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
          <img src={gas} alt='gasIcon'></img> <font color='white'>&nbsp; {data.gasSelected} &#8681; </font> &nbsp;&nbsp;&nbsp; 
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
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleGasDataChange(this.state.gasData.SafeGasPrice)}} >Safe &nbsp; {this.state.gasData.SafeGasPrice}&nbsp;Gwei</MenuItem>
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleGasDataChange(this.state.gasData.ProposeGasPrice)}}>Med &nbsp; {this.state.gasData.ProposeGasPrice}&nbsp;Gwei</MenuItem>
                      <MenuItem onClick={(e)=>{this.handleClose(e); this.handleGasDataChange(this.state.gasData.FastGasPrice)}}>Fast &nbsp; {this.state.gasData.FastGasPrice}&nbsp;Gwei</MenuItem>
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

