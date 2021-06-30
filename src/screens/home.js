import React, { Component } from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';
import Dashboard from './dashboard/dashboard';
import Header from './header/header';



export default class home extends Component {
    
    render() {
        return (
            <div className='flex-container' >
                <div className='sidebar-wrapper'>
                    <Sidebar />    
                </div>
                <div className='main-wrapper'>
                    <div className='header-wrapper'>
                        <Header />
                    </div>
                    <hr style={{position:'relative',borderTop:'0',borderBottomColor:'#737373',marginTop:'42px',marginLeft:'61px',marginRight:'342px'}}></hr>
                    <div className='dashboard-wrapper'>
                        <Dashboard /> 
                    </div>
                </div>
                
            </div>
        )
    }
}
