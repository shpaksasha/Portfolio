import React, {Fragment} from 'react';
import AppBar from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';


const App = () => {
    return (
        <Fragment>
            <AppBar/>
            <Route exact path='/' component={Home}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
