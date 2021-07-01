import React from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import Home from './screens/home'
// import TestingPage from './screens/testingPage';
// import Landing from './screens/landing/landing';

import Router from './routes';

function App() {
  return (
   /*  <>
    <BrowserRouter>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/"><Landing/></Route>
            <Route exact path="/test"> <TestingPage/> </Route>
          </Switch>
    </BrowserRouter>
    </> */
    <Router />

  );
}

export default App;
