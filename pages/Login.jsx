import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Login extends React.Component{
    render(){
        console.log("login");
        return(
            <div className="feed">
            <NavLink
               to='feed'
               activeStyle={ {
               textDecoration: 'none',
               color: 'black'
               }}
           >
               Hello
           </NavLink>
       </div>
        );  
    }
}