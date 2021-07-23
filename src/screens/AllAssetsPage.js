// import React, { Component } from 'react'
import AllAssets from '../components/allAssets'
import { useParams } from 'react-router-dom';

// export default class AllAssetsPage extends Component {
//     render() {
//         return (
//             <center>
//             <div style={{width:'80%', marginTop:'50px'}}>
//                 <AllAssets/>
//             </div>
//             </center>
//         )
//     }
// }


export default function AllAssetsPage() {
    const {address} = useParams();
    return(
        <center>
            <div style={{width:'80%', marginTop:'50px'}}>
                <AllAssets address={address}/>
            </div>
            </center>
    );
}
