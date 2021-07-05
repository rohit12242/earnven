import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'


var allTokens =[]

const styles = () => ({
    root: {
        background: 'beige',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        paddingBottom:'10px'
      },
  });

class App extends Component {

    async componentWillMount(){

        await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`,{},{})
        // await axios.get(`https://api.ethplorer.io/getAddressInfo/${this.state.account}?apiKey=EK-qSPda-W9rX7yJ-UY93y`,{},{})
        .then(async(response) => {
            allTokens = response.data;

        
        })
    }

    sendData = () => {
        this.props.parentCallback(this.state.token);
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
            // console.log(this.state.results)

        }
        // console.log(event)
        this.setState({searchContent:event.target.value})
              
    }

    submitSearch = async(event, value) =>{
        event.preventDefault()
        // console.log(value)
        await this.setState({token:value})
        // window.location.href = '/test'
        this.sendData();
        // console.log(window.token)
        // await this.setState({searchContent:value, redirect:true})
    }

    constructor(props){
        super(props)
        this.state={
            searchContent:'',
            results:[],
            redirect:false,
            token:''
        }
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect===true) {
            this.setState({redirect:false})
            return <Redirect 
              to={{
                  pathname: '/test',
                  state: {searchValue : this.state.searchContent}
                }}/>;
        }

        return (
            <center>
            <div style={{width:'500px'}}>
                
                <div >
                
                <Autocomplete
                    style={{ width: '100%' , float:'left'}}
                    freeSolo
                    blurOnSelect
                    // autoSelect
                    autoComplete
                    autoHighlight
                    onChange={(event, value) => { this.submitSearch(event,value)}} 
                    options={this.state.results}
                    renderInput={(params) => (
                    <TextField {...params}
                        id="filled-search"
                        onChange={this.searchTokens}
                        classes={{
                            root: classes.root,
                        }}
                        variant="filled"
                        label="Search Tokens..."
                        style={{ borderColor:'white', border:'1px', borderStyle:'solid', borderRadius:'20px'}}
                    />
                    // <SearchInput {...params}
                    //      onChange={this.searchTokens}></SearchInput>
                    )}
                />
                </div>
                <div style={{float:'left'}}>
                 &nbsp;
                 {/* <Button style={{height:'60px', borderRadius:'50px'}} variant="contained">
                     Search
                </Button> */}
                 </div>
                 {/* </form> */}
                </div>
                </center>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(App);