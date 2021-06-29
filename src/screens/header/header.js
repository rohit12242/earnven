import React,{Component} from 'react';
import SearchInput from '../../components/searchInput';
import NetworkDropDown from '../../components/networkDropDown';
import MenuListComposition from '../../components/gasDropDownMenu';
import LanguageDropDown from '../../components/languageDropDown';
import HelpDropDown from '../../components/helpDropDown';
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='search-bar'>
                     <SearchInput />
                </div>
                <div className='network-dropdown'>
                    <NetworkDropDown />
                </div>
                <div className='gas-dropdown'>
                    <MenuListComposition/>
                </div>
                <div className='language-dropdown'>
                    <LanguageDropDown />
                </div>
                <div className='help-dropdown'>
                    <HelpDropDown />
                </div>
                {/* <hr style={{borderTop:'1px solid #737373'}}></hr> */}
            
            </div>
        )
    }
}