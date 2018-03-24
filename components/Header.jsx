import React from 'react';
import '../styles/header.css';
export default class Header extends React.Component{
    render(){
        if(this.props.backEnabled){
            return(
                <header>
                    <span onClick={this.props.goBack}> <svg id="back" fill="#FFFFFF" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg> </span><span id="headertitle">{this.props.title}</span>
                </header>
            );
        }else{
            return(<header>
                <span id="headertitle" >{this.props.title}</span>
            </header>);
        }
    }

}