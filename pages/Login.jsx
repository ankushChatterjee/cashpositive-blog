import React from 'react';
import {connect} from 'react-redux';

import '../styles/login.css';
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
        return(<div>
                
                <div  className="login">
                    <div className="logintext"> Login </div>
                    <div className="error">{this.state.error}</div>
                    <form onSubmit={this.checkValue.bind(this)} id="loginform">
                        <input placeholder="Enter Username" onChange={this.setUserName.bind(this)} value={this.state.username} id="username" type="username" />
                        <input placeholder="Enter Password"  onChange={this.setPassword.bind(this)} value={this.state.password} id="password" type="password" />
                        <input id="loginbutton" type="submit" value="Log In" />
                    </form>
                </div>
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
            this.setState({error:'Incorrect Credentials'});
            this.props.dispatch({type:'ACTION_LOGIN_CHANGE',payload:false});
        }
    }
}