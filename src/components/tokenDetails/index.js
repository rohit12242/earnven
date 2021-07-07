import React, { Component } from 'react'
import SearchTokens from '../searchTokens'
import {Chart} from '../Chart/Chart'

export default class index extends Component {

    componentWillMount = async()=>{
        if(this.props==={}){
            // console.log(this.props)
            if(this.props.token){
                await this.setState({token:this.props.token})
            }
        }
        else if(this.props.location){
            if(this.props.location.state){
                if(this.props.location.state.token){
                    await this.setState({token:this.props.location.state.token})
                }
            }
        }
    }

    callbackFunction = (childData) => {
        this.setState({token: childData})
    }

    constructor(props){
        super(props)
        this.state={
            value:'',
            token:''
        }
    }

    render() {
        return (
            <div>
                
                {/* {this.state.token} */}
                <SearchTokens parentCallback = {this.callbackFunction}/> <br/><br/><br/><br/>
                <hr width='80%'/>
                <Chart token={this.state.token}/> 
            </div>
        )
    }
}
