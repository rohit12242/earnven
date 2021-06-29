import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './screens/home'
import TestingPage from './screens/testingPage';
import Sidebar from './screens/sidebar/sidebar';
function App() {
  return (
    <>
    <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/test"> <TestingPage/> </Route>
          </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
