import React from 'react';
import './App.css';
import Home from './containers/Home';
import Headers from './component/header';
import Hero from './component/Hero';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import contactus from './containers/Contactus';
import Post from './containers/Posts';

function App() {
  return (
    <Router>
        <div className="App">
        <header className="App-header">
        <Headers/>
        <Hero/>
        <Route path="/" exact component={Home}/>     
        <Route path="/Contactus" component={contactus}/>
        <Route path="/Post/:postid" component={Post}/>

        </header>
      </div>
    </Router>
    
  );
}

export default App;
