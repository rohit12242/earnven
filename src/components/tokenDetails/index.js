import React, { Component } from 'react'
import SearchTokens from '../searchTokens'
import {Chart} from '../Chart/Chart'

export default class index extends Component {

    callbackFunction = (childData) => {
        this.setState({token: childData})
    }

    constructor(){
        super()
        this.state={
            value:'',
            token:''
        }
    }

    render() {
        return (
            <div>
                
                {this.state.token}
                <SearchTokens parentCallback = {this.callbackFunction}/> <br/><br/><br/><br/>
                <Chart token={this.state.token}/> 
            </div>
        )
    }
}
