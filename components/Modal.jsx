import React from 'react';
import '../styles/modal.css';
import {connect} from 'react-redux';


@connect((store)=>{
    return {
        data:store
    }
})
export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.follow = this.props.followed;
    }
    render(){

        let flo = false;
        let index = this.props.data.following.indexOf(this.props.username);
        if(index!==-1){
            flo = true;

        }
        console.log("followed",this.props.followed);
        let followText = ""
        if(flo){
            followText="Following";
        }else{
            followText="Follow";
        }
        this.follow = flo;
        let display = 'none';
        if(this.props.show){
            display = 'block';
        }
        return(
            <div style={{display:display}} id="myModal" className="modal">
                        <div className="modal-content">
                            <span onClick={this.props.closeModal} className="close">&times;</span>
                            <h1 className="modalTitle">{this.props.title}</h1>
                            <span className="modalUsername">{this.props.username}</span>
                            <span onClick={this.followUser.bind(this)} className="follow"> {followText} </span>
                            <p className="modalContent" >{this.props.content}</p>
                        </div>
            </div>
        )
    }
    followUser(){
        if(!this.follow){
            this.setState({follwing:true});
            this.props.dispatch({type:'FOLLOW_ADD',payload:this.props.username});
            this.follow = true;
        }else{
            this.setState({following:false});
            this.props.dispatch({type:'FOLLOW_REMOVE',payload:this.props.username});
            this.follow = false;
        }
        
    }
}