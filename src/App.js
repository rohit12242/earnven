import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './screens/home'
import TestingPage from './screens/testingPage';
// import Sidebar from './screens/sidebar/sidebar';
import LandingPage from './screens/landingPage'

function App() {
  return (
    <>
    <BrowserRouter>
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/"> <LandingPage/> </Route>
            <Route exact path="/home"> <Home/> </Route>
            <Route path="/test" render={(props) => <TestingPage {...props}/>} />
            {/* <Route exact path="/test"> <TestingPage/> </Route> */}

          </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
