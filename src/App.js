import React, {Fragment} from 'react';
import AppBar from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import AppMenu from "./components/Header/head";

const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
