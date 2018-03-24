import React from 'react';
import ReactDOM from 'react-dom';

import Login from './pages/Login';
import Feed from './pages/Feed';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import {Provider, connect} from 'react-redux';
import store from './store/store';
console.log(store);
const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><Router><Switch>
    <Route exact path="/" component={Login} />
    <Route path="/feed" component={Feed} /></Switch>
  </Router></Provider>, app);

