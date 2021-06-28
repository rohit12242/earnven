import React, { Component } from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';
import Dashboard from './dashboard/dashboard';

export default class home extends Component {
    render() {
        return (
            <div >
                <Sidebar />
                <Dashboard />
            </div>
        )
    }
}
