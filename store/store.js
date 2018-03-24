import {applyMiddleware, createStore} from 'redux';


import blogReducer from '../reducers/blogReducer';


export default createStore(blogReducer);