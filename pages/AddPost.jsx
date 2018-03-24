import React from 'react';
import {connect} from 'react-redux';

@connect((store)=>{
    return {
        username:store.username
    }
})
export default class AddPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {title:"",content:""};
    }
    render(){
        console.log(this.props.username);
        return(
            <div>
                <form onSubmit={this.addPost.bind(this)}>
                    <input onChange={this.titleChange.bind(this)} value={this.state.title} />
                    <input onChange={this.contentChange.bind(this)} value={this.state.content} />
                    <input type="submit" value="Add Post" />
                </form>
            </div>
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
}