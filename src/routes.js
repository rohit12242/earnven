import {Navigate, useRoutes} from 'react-router-dom';
import Landing from './screens/landing/landing';
import Home from './screens/home';
import PageNotFound from './screens/PageNotFound';


export default function Router(){
    return useRoutes([
        {
            path:'/',
            element:<Landing />,
            /* children: [
                {path:'/',element: <Landing/>},
                {path:'dashboard', element: <Home />},
                {path:'404',element:<PageNotFound />},
                {path:'*', element:<Navigate to="/404" />}
            ] */
        },
        {
            path:'/dashboard',
            element: <Home/>
        },
        { path: '/404', element: <PageNotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
    ]
    );
}