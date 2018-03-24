import React from 'react';
import {connect} from 'react-redux';
import '../styles/add.css';
import Header from '../components/Header';

@connect((store)=>{
    return {
        username:store.username,
        loggedIn:store.loggedIn
    }
})
export default class AddPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {title:"",content:""};
    }
    render(){
        if(!this.props.loggedIn){
            return(
                <div className="blogcard loginplease">
                    Please Log In
                </div>
            )
        }
        console.log(this.props.username);
        return(<div>
            <Header title="Add Blog Post" backEnabled={true} goBack={this.goBack.bind(this)}  />
            <div className="addpage">
                <form className="addform" onSubmit={this.addPost.bind(this)}>
                    <input placeholder="Title" id="title" onChange={this.titleChange.bind(this)} value={this.state.title} />
                    <textarea rows="50" placeholder="Your thoughts" id="content" onChange={this.contentChange.bind(this)} value={this.state.content} />
                    <input id="postadd" type="submit" value="Add Post" />
                </form>
            </div></div>
        );
    }
    titleChange(evt){
        this.setState({title:evt.target.value});
    }
    contentChange(evt){
        this.setState({content:evt.target.value});
    }
    addPost(evt){
        evt.preventDefault();
        if(this.state.title !=="" && this.state.content !== ""){
            this.props.dispatch({type:'ACTION_ADD',payload: {
                username:this.props.username,
                picture:"https://randomuser.me/api/portraits/men/77.jpg",
                blogTitle:this.state.title,
                blogContent:this.state.content
            }});
            this.props.history.push('/feed');
        }
    }
    goBack(){
        this.props.history.push('/feed');
    }
}