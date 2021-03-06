import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import style from '../css/style.module.css';
// //Components
import Header from '../Components/header.js';
import Footer from '../Components/footer';

const MainLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className={style.body_wrapper}>
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </div>
        )}/>
    )
}

export default MainLayoutRoute;