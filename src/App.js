import React,{Fragment} from 'react';
import AppBar from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from "./components/Home/home";


const App = () => {
  return (
    <Fragment>
        <AppBar/>
        <Route exact path='/' component={Home}/>
    </Fragment>
  );
}

export default App;
