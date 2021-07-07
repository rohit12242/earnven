import React ,{Component} from 'react';
import TransactionHistory from '../components/transactionHistory';

export default class History extends Component{
    render(){
        return(
            <div style={{marginLeft:'70px'}}>
                {/* <h1 style={{color:'white', textAlign:'center'}}> History Page Work In Progress</h1> */}
                <TransactionHistory />
            </div>
        );
    }
}