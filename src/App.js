import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import CodeNation from './components/CodeNation';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import ExternalLinks from './components/ExternalLinks';
import Welcome from './components/Welcome'

class App extends Component {
  render(){
    return (
      <div className="App">

      <BrowserRouter>

      {/* <Navbar /> */}

      <Switch>

        <Route path="/" component={Welcome} exact/>

        <Route path="/home" component={Home} />

        <Route path="/aboutme" component={AboutMe}/>

        <Route path='/codenation' component={CodeNation}/>

        <Route path='/externallinks' component={ExternalLinks}/>
       

      </Switch>

      </BrowserRouter>

      </div>
    );
  }
}

export default App;
