import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import AppMenu from './components/Header/head';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Service from './components/Services/services';
import Techno from './components/Technologies/technogies';

const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/services' component={Service}/>
            <Route exact path='/technologies' component={Techno}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
