import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import dashboardLogo from '../../../assets/icons/dashboardlogo.png';
import historyLogo from '../../../assets/icons/history.png';
import defiMadeEasyLogo from '../../../assets/icons/defimadeeasy.png';
import tradingLogo from '../../../assets/icons/trading.png';
import bridgeLogo from '../../../assets/icons/Bridge.png';
import safeFarmsLogo from '../../../assets/icons/safefarm.png'
import multiSenderLogo from '../../../assets/icons/multisender.png';
import pylonProductsLogo from '../../../assets/icons/pylonproducts.png';
import pylonLogo from '../../../assets/icons/pylonlogo.png';
import * as RiIcons from "react-icons/ri";
import Account from './account/account';


export default class Sidebar extends Component{
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
        {/*<nav className='sideBar'>
          <ul className='left-menu'>
            <li className='nav-element'>
              <Link to='/'><img src={dashboardLogo} alt="dashboardLogo" className='logo' /><span className='nav-text'>Dashboard</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={historyLogo} alt="historyLogo" className='logo'/> <span className='nav-text'>History</span></Link>
             </li>
            <li className='nav-element'>
              <Link to='/'><img src={defiMadeEasyLogo} alt="defiMadeEasyLogo" className='logo'/> <span className='nav-text'>Defi made easy</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={tradingLogo} alt="tradingLogo" className='logo'/> <span className='nav-text'>Trading</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={bridgeLogo} alt="bridgeLogo" className='logo'/> <span className='nav-text'>Bridge</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={safeFarmsLogo} alt="safeFarmsLogo" className='logo'/> <span className='nav-text'>Safe farms</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={multiSenderLogo} alt="multiSenderLogo" className='logo'/> <span className='nav-text'>Multisender</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'><img src={pylonProductsLogo} alt="pylonProductsLogo" className='logo'/> <span className='nav-text'>Pylon products</span></Link>
            </li>
          </ul>
    </nav>*/}
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

}
