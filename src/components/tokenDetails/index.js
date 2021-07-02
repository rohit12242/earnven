import React, { Component } from 'react'
import SearchTokens from '../searchTokens'

export default class index extends Component {

    constructor(){
        super()
        this.state={
            value:''
        }
    }

    render() {
        return (
            <div>
                <SearchTokens/> <br/>
            </div>
        )
    }
}
