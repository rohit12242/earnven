// import React ,{Component} from 'react';
import TransactionHistory from '../components/transactionHistory';
import { useParams } from 'react-router-dom';

// export default class History extends Component{
//     render(){
//         return(
//             <div style={{marginLeft:'70px'}}>
//                 {/* <h1 style={{color:'white', textAlign:'center'}}> History Page Work In Progress</h1> */}
//                 <TransactionHistory />
//             </div>
//         );
//     }
// }


export default function History() {
    const {address} = useParams();
    return (
        <div style={{ marginLeft: '70px' }}>
            {/* <h1 style={{color:'white', textAlign:'center'}}> History Page Work In Progress</h1> */}
            {console.log("address inside history component::",address)}
            <TransactionHistory address={address}/>
        </div>
    );
}