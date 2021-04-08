import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import LangChangeMenu from './components/LangChangeMenu/LangChangeMenu';
import {createBrowserHistory} from 'history';

import InputImage from './components/db/InputImage';
import ListImages from './components/db/ListImages';


//PAGES
import mainPage from './pages/mainPage.js';
import percksPage from './pages/percksPage.js';

const history = createBrowserHistory();

function App(){

  return (
    <div  className="allDiv" >
      <Router history={history}>
        <div>
          <InputImage/>
          <ListImages/>
        </div>
        <div className="siteHead">
          <div className="headText">
            <LangChangeMenu/>
            <HeaderMenu/>
          </div>
        </div>
        <Switch>
          <Route path="/mainPage" component={mainPage}/>
          <Route path='/percksPage' component={percksPage}/>
          {/* <Redirect from='/' to='/mainPage/'/> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App;


