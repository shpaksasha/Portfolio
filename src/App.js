import React, {Fragment} from 'react';
import AppMenu from './pages/Header/header';
import {Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Footer from './pages/Footer/footer';
import Digital from './pages/Digital/digital';
import Technologies from './pages/Technologies/technologies';
import Portfolio from './pages/Portfolio/portfolio';
import About from './pages/About/about';
import Contacts from './pages/Contacts/contacts';


const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/services' component={Digital}/>
            <Route exact path='/technologies' component={Technologies}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Footer/>
        </Fragment>
    )
};


export default App;
