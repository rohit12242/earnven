import React, { Component } from 'react'
import Input from '../components/amountInput/index'
import SearchInput from '../components/searchInput/index'
import DropDownMenu from '../components/gasDropDownMenu/index'
import {data} from '../globalStore'

export default class testingPage extends Component {
    render() {
        return (
            <div>
                For Testing Purposes
                <br/>
                <div style={{backgroundColor:'#141A1E', height:'500px', width:'1000px'}}>
                    <center><br/><br/>
                    <Input/> 
                    
                    <br/><br/>
                    <SearchInput placeholder='Search Tokens...'/>

                    <br/><br/>
                    <DropDownMenu/>

                    <br/><br/>
                    <button
                    onClick={(e)=>{console.log(data)}}>
                        Get GAS
                    </button>
                    </center>
                </div>
            </div>
        )
    }
}
