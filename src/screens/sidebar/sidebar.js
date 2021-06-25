import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
// import dashboardLogo from '.../Assets/dashboardlogo.png';
import dashboardLogo from '.../trello.png';

export default class Sidebar extends Component{
  render() {
    return(
      <div >
        <nav className='sideBar'>
          <ul className='left-menu'>
            <li className='nav-element'>
              <Link to='/'><img src={dashboardLogo} alt="logo" /><span>Dashboard</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'> <span>History</span></Link>
             </li>
            <li className='nav-element'>
              <Link to='/'> <span>Defi made easy</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'> <span>Trading</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'> <span>Bridge</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'> <span>Safe farms</span></Link>
            </li>
            <li className='nav-element'>
              <Link to='/'> <span>Multisender</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}
