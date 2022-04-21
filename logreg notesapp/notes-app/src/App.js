import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Application';
import Products from './components/pages/Login';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
