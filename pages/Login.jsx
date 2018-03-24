import React from 'react';
import {connect} from 'react-redux';

import loginAction from '../actions/loginAction';


@connect((store)=>{
    return {
        data:store.loggedIn
    }
})
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {okay:false,username:"",password:"",error:null};
    }
    render(){
        return(
            <div onSubmit={this.checkValue.bind(this)} className="login">
                <div className="error">{this.state.error}</div>
                <form id="loginform">
                    <input placeholder="Enter Username" onChange={this.setUserName.bind(this)} value={this.state.username} id="username" type="username" />
                    <input placeholder="Enter Password"  onChange={this.setPassword.bind(this)} value={this.state.password} id="password" type="password" />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        );  
    }
    setPassword(evt){
        this.setState({password:evt.target.value});
    }
    setUserName(evt){
        this.setState({username:evt.target.value});
    }
    checkValue(evt){
        evt.preventDefault();
        if(this.state.username!=="" && this.state.password!==""){
            this.setState({okay:true,error:""});
            this.props.dispatch({type:'ACTION_LOGIN_CHANGE',payload:{loggedIn:true,username:this.state.username}});
            this.props.history.push("/feed");
        }else{
            this.setState({error:'Enter The values'});
            this.props.dispatch({type:'ACTION_LOGIN_CHANGE',payload:false});
        }
    }
}