import React from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import Home from './screens/home'
// import TestingPage from './screens/testingPage';
// import Landing from './screens/landing/landing';

import Router from './routes';
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';

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
    <ThemeConfig>
      <ScrollToTop/>
      <Router />
    </ThemeConfig>


  );
}

export default App;
