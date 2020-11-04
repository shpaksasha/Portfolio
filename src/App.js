import React, {Fragment} from 'react';
import AppBar from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import ScrollToTop from './components/Header/scrollTo';

const App = () => {
    return (
        <Fragment>
            <ScrollToTop/>
            <AppBar/>
            <Route exact path='/' component={Home}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
