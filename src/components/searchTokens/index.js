import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router'


var allTokens =[]

const styles = () => ({
    root: {
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
          // Default transform is "translate(14px, 20px) scale(1)""
          // This lines up the label with the initial cursor position in the input
          // after changing its padding-left.
          transform: "translate(34px, 20px) scale(1);"
        }
      },
      inputRoot: {
        color: "white",
        // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
          // Default left padding is 6px
          paddingLeft: 26
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "green"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "red"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "purple"
        }
      }
    
  });

class App extends Component {

    async componentWillMount(){

        await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`,{},{})
        // await axios.get(`https://api.ethplorer.io/getAddressInfo/${this.state.account}?apiKey=EK-qSPda-W9rX7yJ-UY93y`,{},{})
        .then(async(response) => {
            allTokens = response.data;
            console.log(allTokens)
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

        // if (this.state.redirect===true) {
        //     this.setState({redirect:false})
        //     return <Redirect 
        //       to={{
        //           pathname: '/test',
        //           state: {searchValue : this.state.searchContent}
        //         }}/>;
        // }

        return (
            <center>
            <div style={{width:'300px'}}>
                
                <div >
                
                <Autocomplete
                    style={{ width: '100%' , float:'left'}}
                    freeSolo
                    blurOnSelect
                    // autoSelect
                    autoComplete
                    autoHighlight
                    classes={classes}
                    onChange={(event, value) => { this.submitSearch(event,value)}} 
                    options={this.state.results}
                    renderInput={(params) => (
                    <TextField {...params}
                        id="filled-search"
                        onChange={this.searchTokens}
                        // InputProps={{
                        //     className: classes.multilineColor
                        // }}
                        // classes={{
                        //     root: classes.root,
                        // }}
                        variant="filled"
                        size="small"
                        label="Search Tokens..."
                        style={{ borderColor:'white', color:'white', border:'1px', borderStyle:'solid', borderRadius:'7px'}}
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

  