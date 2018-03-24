import React from 'react';
import ReactDOM from 'react-dom';

import Login from './pages/Login';
import Feed from './pages/Feed';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import {Provider, connect} from 'react-redux';
import store from './store/store';
import AddPost from './pages/AddPost';
console.log(store);
const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><Router><Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/feed" component={Feed} />
    <Route exact path="/add" component={AddPost} />
    </Switch>
  </Router></Provider>, app);

