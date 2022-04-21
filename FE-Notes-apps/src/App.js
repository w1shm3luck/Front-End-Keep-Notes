import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/auth/login';
import Application from './components/pages/Application';
import SignUp from './components/pages/auth/signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/application' component={Application} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
