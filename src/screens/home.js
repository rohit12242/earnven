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
                    <Header />
                    <Dashboard /> 
                </div>
                
                {/* <div>1</div>
                <div>
                    <div>2</div>
                    <div>3</div>
                </div> */}


            </div>
        )
    }
}
