import React, { Component } from 'react'
import Web3 from "web3";
import TransparentButton from'../components/TransparentButton'
import Portis from '@portis/web3';
import Fortmatic from 'fortmatic';


export default class landingPage extends Component {

    async componentWillMount(){
        // await this.loadWeb3();
        // await this.loadBlockchainData();        
    }

    async loadPortis(){
        const portis = new Portis('a48d17a8-f418-407e-951c-23ed15677980', 'mainnet');
        const web3 = new Web3(portis.provider);
        window.web3 = web3;
    }

    async loadFormatic(){
        let fm = new Fortmatic('pk_live_9F53EBC750F34391');
        let web3 = new Web3(fm.getProvider());
        window.web3 = web3;
    }

    async loadMetamask() {

        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData(){
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        this.setState({account:accounts[0]})
    }

    constructor(){
        super()
        this.state={
            account:'0x0',
            
        }
    }

    render() {
        return (
            <>
                <div style={{backgroundColor:'#141A1E', color:'white', height:'auto', width:'1000px', paddingBottom:'50px'}}>

                <center>
                <br/><br/>
                Landing Page
                <br/><br/>

                {this.state.account}

                <br/><br/>

                <TransparentButton
                onClick={async(e)=>{await this.loadMetamask();await this.loadBlockchainData()}}
                value='Metamask'/>

                <br/><br/>

                <TransparentButton
                onClick={async(e)=>{await this.loadPortis();await this.loadBlockchainData()}}
                value='Portis'/>

                <br/><br/>

                <TransparentButton
                onClick={async(e)=>{await this.loadFormatic();await this.loadBlockchainData()}}
                value='Formatic'/>
                    
                    

                </center>
                </div>
            </>
        )
    }
}
