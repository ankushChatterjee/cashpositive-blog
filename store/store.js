import {applyMiddleware, createStore} from 'redux';


import blogReducer from '../reducers/blogReducer';

console.log(blogReducer);
export default createStore(blogReducer);