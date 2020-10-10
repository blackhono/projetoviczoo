import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

import Routes from './Constants/Routes';

import NavBar from './components/navBar/navBar';
import Loading from './components/loading/loading';


function App() {
  
  const homepage = lazy(() => import('./pages/home'));
  const sobre = lazy(() => import('./pages/sobre'));
  const eita = lazy(() => import('./components/loading/loading'));
  const pageluz = lazy(() => import('./pages/pageluz/emitir'));

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <NavBar/> 

      <Switch>
        {/* Suspense espera o loading do conteudo */}
        <Suspense fallback={<Loading/>}>
          <Route exact path={Routes.HOME} component={homepage}/>
          <Route exact path={Routes.SOBRE} component={sobre}/>
          <Route exact path={Routes.EITA} component={eita} />
          {/* ROTA VICTOR ABAIXO*/}
          <Route exact path={Routes.INICIO} component={pageluz} />
          {/* <Redirect path={'/*'} to={Routes.SOBRE}></Redirect> */}
          <Route path={'*'}><Loading/></Route>
        </Suspense>
        {/* <Route  path={'/'} component={Homepage}/> */}
        {/* <Route  path={Routes.HOME} component={Homepage}/>
        <Route path={Routes.SOBRE} component={Sobre}/> */}
        {//Abaixo exemplo utilizando a documentação do React-Router-Dom 
        }
        {/* <Route path={Routes.SOBRE}>
            <Sobre/>
        </Route> */}

        
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
