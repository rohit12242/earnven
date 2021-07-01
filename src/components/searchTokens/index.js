import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
// import SearchInput from '../searchInput/index'

var allTokens =[]

export default class index extends Component {

    async componentWillMount(){

        await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`,{},{})
        // await axios.get(`https://api.ethplorer.io/getAddressInfo/${this.state.account}?apiKey=EK-qSPda-W9rX7yJ-UY93y`,{},{})
        .then(async(response) => {
            allTokens = response.data;

        
        })
    }

    searchTokens = async(event) => {
        event.preventDefault()
        var arr = []
            for(var i=0; i<allTokens.length; i++){
                var searchPattern = new RegExp('^' + event.target.value, 'i');
                if (searchPattern.test(allTokens[i].id)) {
                    arr.push(allTokens[i].id)
                }
        }
        // console.log(arr)
        if(arr.length<1000){
            await this.setState({results:arr})
            console.log(this.state.results)

        }
              
    }

    constructor(){
        super()
        this.state={
            searchContent:'',
            results:[]
        }
    }

    render() {
        return (
            <div >
                <center>
                <Autocomplete
                    style={{ width: 500 }}
                    freeSolo
                    autoComplete
                    autoHighlight
                    options={this.state.results}
                    renderInput={(params) => (
                    <TextField {...params}
                        onChange={this.searchTokens}
                        // classes={{}}
                        variant="outlined"
                        label="Search Box"
                        style={{ borderColor:'white', border:'1px', borderStyle:'solid', borderRadius:'20px'}}
                    />
                    // <SearchInput {...params}
                    //      onChange={this.searchTokens}></SearchInput>
                    )}
                />
                </center>
                </div>
        )
    }
}
