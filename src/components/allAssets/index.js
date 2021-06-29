import React, { Component } from 'react'
import Web3 from 'web3';
import axios from 'axios';

var contents = ''
var arr2 = []
var arr1 = []
export default class index extends Component {

    async componentWillMount(){
        await this.loadWeb3();
        await this.loadBlockchainData();
        
    }

    async loadWeb3() {
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

        await axios.get(`https://api.ethplorer.io/getAddressInfo/0x32Be343B94f860124dC4fEe278FDCBD38C102D88?apiKey=EK-qSPda-W9rX7yJ-UY93y`,{},{})
        // await axios.get(`https://api.ethplorer.io/getAddressInfo/${this.state.account}?apiKey=EK-qSPda-W9rX7yJ-UY93y`,{},{})
        .then(async(response) => {
            var tokens = response.data.tokens
            // console.log(tokens)
            if(tokens!==undefined){
                for(var i = 0; i<tokens.length ; i++){
                    if(tokens[i].tokenInfo.price !== false){
                        tokens[i].totalInvestment = parseFloat(web3.utils.fromWei(tokens[i].rawBalance, 'ether'))*parseFloat(tokens[i].tokenInfo.price.rate)
                        arr1.push(tokens[i])
                    }
                }

            arr1.sort((a, b) => parseFloat(b.totalInvestment) - parseFloat(a.totalInvestment));

            // console.log(arr1)
            this.update()
            
            }    
    })
    }

    update = () =>{
        const web3 = window.web3;
        arr2 = []
        // console.log(this.state.page)
            var start = (this.state.page-1)*10
            var end = ((this.state.page)*10)
            for(var i=start; i<end; i++){
                var object = {};
                object.name = arr1[i].tokenInfo.name
                object.profit = arr1[i].tokenInfo.price.diff
                object.symbol = arr1[i].tokenInfo.symbol
                object.image = arr1[i].tokenInfo.image
                object.balance = parseFloat(web3.utils.fromWei(arr1[i].rawBalance, 'ether')).toFixed(2)
                object.rate = parseFloat(arr1[i].tokenInfo.price.rate).toFixed(2)
                object.totalInvestment = parseFloat(arr1[i].totalInvestment).toFixed(2)
                arr2.push(object)
            }

            // console.log(arr2)
            this.change(arr2)
            this.setState({contents})
        
    }

    change = (arr) =>{
        contents = arr.map((object)=>
        <div>

        <div 
            style={{
                height:'50px',
                width:'700px',
                background:'transparent',
                cursor:'pointer'
            }}>

            <div style={{width:'5%', height:'50px',float:'left'}}>
                <img style={{height:'30px', width:'30px', marginTop:'15px'}} alt='' src={`https://ethplorer.io${object.image}`}/>
            </div>

            <div style={{width:'25%', height:'50px',float:'left'}}>
                <font color='white'> <br/>{object.name}</font>
            </div>

            <div style={{width:'15%', height:'50px',float:'left'}}>
                <font color='white'> <br/>{object.profit} %</font>
            </div>

            <div style={{width:'30%', height:'50px',float:'left'}}>
                <font color='white'> <br/> {object.balance} {object.symbol} | ${object.rate} </font>
            </div>

            <div style={{width:'25%', height:'50px',float:'left'}}>
                <font color='white'><br/> ${object.totalInvestment} </font>
            </div>

            <hr></hr>

        </div>
        </div>
        )
        // console.log(contents)
    }

    constructor(){
        super()
        this.state={
            account:'',
            contents:'',
            page: 1
        }
    }

    mouseOver = (e) => {
        e.target.style.background = '#BB86FC'
    }

    mouseOut = (e) => {
        e.target.style.background = 'transparent'
    }

    render() {
        this.change(arr2)
        return (
            <div style={{
                width:'800px',
                height:'720px',
                background:'transparent',
                border:'1px',
                borderStyle:'solid',
                borderColor:'white',
                borderRadius:'20px'
            }}>
            <center>
            <div style={{marginTop:'30px', marginRight:'600px', fontSize:'20px', marginBottom:'10px'}}>
                <font color='white'> All Assets </font>
            </div>
            
            <br/><font color='white'>
            <button
            onClick={async(e)=>{if(this.state.page!==1){ await this.setState({page:this.state.page-1});this.update()}}}
            > &lt; </button> &nbsp;&nbsp;&nbsp;

            {this.state.page} &nbsp;&nbsp;&nbsp;

            <button
            onClick={async(e)=>{await this.setState({page:this.state.page+1});this.update()}}
            > &gt; </button> 

            </font><br/><br/>

            <hr/>

            {this.state.contents}

            <hr/>

            <br/><font color='white'>
            <button
            onClick={async(e)=>{if(this.state.page!==1){ await this.setState({page:this.state.page-1});this.update()}}}
            > &lt; </button> &nbsp;&nbsp;&nbsp;

            {this.state.page} &nbsp;&nbsp;&nbsp;

            <button
            onClick={async(e)=>{await this.setState({page:this.state.page+1});this.update()}}
            > &gt; </button> 

            </font><br/><br/>


            
            </center>      
            </div>
        )
    }
}
