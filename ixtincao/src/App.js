import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

import Routes from './Constants/Routes';

import Homepage from './pages/home';
import Sobre from './pages/sobre';



function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route  path={Routes.HOME} component={Homepage}/>
        
        <Route path={Routes.SOBRE} component={Sobre}/>
        {//Abaixo exemplo utilizando a documentação do React-Router-Dom 
        }
        {/* <Route path={Routes.SOBRE}>
            <Sobre/>
        </Route> */}

        
        
      </Switch>
    </Router>
  );
}

export default App;
