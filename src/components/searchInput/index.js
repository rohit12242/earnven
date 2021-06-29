import React from 'react'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import styles from './styles.css'

export default function SearchInput({value,...props}) {
    return (
        <>
        <Paper elevation={3} 
        style={{width:'300px', height:'40px', 
                background:'transparent', borderStyle:'solid', 
                borderColor:'white', borderRadius:'10px', borderWidth:'1px'}}>
            
            <InputBase style={{width:'230px', color:'white', marginTop:'5px'}}
                {...props}
            />

            <IconButton style={{height:'35px', width:'35px', color:'white'}} >
                <SearchIcon />
            </IconButton>

        </Paper>
        </>
    )
}
