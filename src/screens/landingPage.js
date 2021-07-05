import React, { Component } from 'react'
import WalletSelector from '../components/WalletSelector'
import { Button } from "react-bootstrap";


export default class landingPage extends Component {

    async componentWillMount(){
        // this.loadBlockchainData();
    }

    async loadBlockchainData(){
        
            const web3 = window.web3;
            const accounts = await web3.eth.getAccounts();
            this.setState({account:accounts[0], access:true})
        
        
    }

    async enterApp(){
        // console.log('lol')
        if (window.web3) {
            window.location.href = '/home';
        }
        else{
            alert('Wallet Not Connected')
        }
    }

    constructor(){
        super()
        this.state={
            account:'0x0',
            access:false
        }
    }

    render() {
        return (
            <>
            <center>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
                <div style={{backgroundColor:'#141A1E', color:'white', height:'auto', width:'1000px', paddingBottom:'50px'}}>

                
                <br/><br/>
                Landing Page
                <br/><br/>
                
                <WalletSelector/>

                <br/><br/>

                <Button variant="primary" onClick={this.enterApp}>
                    Enter App
                </Button>

                </div>
                </center>

            </>
        )
    }
}
