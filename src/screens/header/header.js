import React,{Component} from 'react';
import SearchInput from '../../components/searchInput';

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <SearchInput />
            </div>
        )
    }
}