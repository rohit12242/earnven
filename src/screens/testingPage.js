import React, { Component } from 'react'
import Input from '../components/amountInput/index'
import SearchInput from '../components/searchInput/index'
import GasDropDownMenu from '../components/gasDropDownMenu/index'
import LanguageDropDownMenu from '../components/languageDropDown/index'
import HelpDropDownMenu from '../components/helpDropDown/index'
import TransparentButton from '../components/TransparentButton'
import NetworkDropDown from '../components/networkDropDown'
import TotalValueBox from '../components/totalValueBox'
import AllAssetsMini from '../components/allAssetsMini'
import AllAssets from '../components/allAssets'
import TransactionHistory from '../components/transactionHistory'
import {data} from '../globalStore'

export default class testingPage extends Component {
    render() {
        return (
            <div>
                For Testing Purposes
                <br/>
                <div style={{backgroundColor:'#141A1E', height:'3000px', width:'1000px'}}>
                    <center><br/><br/>
                    <Input/> 
                    
                    <br/><br/>
                    <SearchInput placeholder='Search Tokens...'/>

                    <br/><br/>
                    <GasDropDownMenu/>

                    <br/><br/>
                    <LanguageDropDownMenu/>

                    <br/><br/>
                    <HelpDropDownMenu/>

                    <br/><br/>
                    <TransparentButton value='Submit'/>

                    <br/><br/>
                    <NetworkDropDown/>

                    <br/><br/>
                    <TotalValueBox/>

                    <br/><br/>
                    <AllAssetsMini/>

                    <br/><br/>
                    <AllAssets/>

                    <br/><br/>
                    <TransactionHistory/>

                    <br/><br/><br/>
                    <button
                    onClick={(e)=>{console.log(data)}}>
                        Get Global Variables
                    </button>
                    </center>
                </div>
            </div>
        )
    }
}
