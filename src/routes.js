import {Navigate, useRoutes} from 'react-router-dom';
// import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Landing from './screens/landingPage';
import PageNotFound from './screens/PageNotFound';
import AppLayout from './layout/app';
import Dashboard from './screens/dashboard/dashboard';
import History from './screens/History';
import DefiMadeEasy from './screens/DefiMadeEasy';
import Bridge from './screens/Bridge';
import Multisender from './screens/MultiSender';
import SafeFarm from './screens/safeFarms/safefarm';
import Trading from './screens/Exchange/exchange';
import TestingPage from './screens/testingPage';
import AllAssetsPage from './screens/AllAssetsPage';
import TokenDetailsPage from './components/tokenDetails'
import NFTpage from './screens/NFTpage';
import NFTTokenPage from './components/NFTTokenPage'
import AllTokensApprovals from './screens/allTokensApprovals'
import TokenApproval from './screens/tokenApproval'

export default function Router(){

    // return(
    //         <Routes>
    //             {/* <AppLayout/> */}
    //             <Route exact path="/lol" render={<></>} />
    //         </Routes>
    // )


    return useRoutes([
        {
            path:'/',
            element:<Landing />,
        },
        {
            path:'/app',
            element: <AppLayout/>,
            children:[
                {path:'/',element: <Navigate to="/app/dashboard" replace /> },
                {path:'dashboard',element:<Dashboard/>},
                {path:'history',element:<History />},
                {path:'defimadeasy',element:<DefiMadeEasy />},
                {path:'assets',element:<AllAssetsPage />},
                {path:'token/:tokenid',element:<TokenDetailsPage />},
                {path:'token',element:<TokenDetailsPage />},
                {path:'bridge',element:<Bridge />},
                {path:'multisender',element:<Multisender />},
                {path:'safefarm',element:<SafeFarm />},
                {path:'trading',element:<Trading />},
                {path:'nft',element:<NFTpage />},
                // {path:'nft-token',element:<NFTTokenPage/>},
                {path:'nft-token/:contract/:id',element:<NFTTokenPage/>},
                {path:'approvals',element:<AllTokensApprovals />},
                {path:'approvals/:tokenAddress',element:<TokenApproval />},
                { path: '*', element: <Navigate to="/404" replace /> }

            ]
        },
        { path: '/404', element: <PageNotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
        { path:'/testingpage', element: <TestingPage />}
    ]
    );
}