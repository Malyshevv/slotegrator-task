import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from  './components/main.js';
import Header from  './components/header.js';
import News from './components/news.js';
import FullNews from './components/fullnews.js';
import AllUsers from './components/allusers.js';
import Login from './components/login.js';
import Profile from './components/profile.js'
import Footer from  './components/footer.js';

import NotMatch from './components/notMatch.js';

import './App.css';



import  store  from  "./store.js";

function App() {

  

  return (
    <div className="App">

        <Router>

        <Route exact path="*" component={Header}/>

        <Switch>
          <Route exact path={["/","/home","/index"]} component={Main}/>

          <Route exact path="/news" component={News}/>
          <Route exact path="/news/:id" component={FullNews} />

          <Route exact path="/login" component={Login}/>
          <Route exact path="/users" component={AllUsers}/>

          <Route exact path="/profile" component={Profile}/>

          //404 page
          <Route path="*" component={NotMatch}/>
        </Switch>
        <Route exact path="*" component={Footer}/>
       </Router>

    </div>
  );
}

export default App;
