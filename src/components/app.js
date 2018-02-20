import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from "./nav";
import {Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Quote from './quote';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';

const App = () => (
    <div className='container'>
       <Nav/>

        <Route exact path='/' component={Home}/>
        <Route path='/about-us' component={About}/>
        <Route path='/movie-quote' component={auth(Quote)}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/>
    </div>
);

export default App;
