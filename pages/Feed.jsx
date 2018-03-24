import React from 'react';
import {connect} from 'react-redux';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import Modal from '../components/Modal';
import '../styles/feed.css';

@connect((store)=>{
    return {
        data:store
    }
})
export default class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {modalShoe:false,title:"",content:"",username:"",followed:false};
    }
    render(){
        let i=0;
        let elements = this.props.data.articles.map(item=>{
            i++;
            return <BlogCard showModal={this.showModal.bind(this)} data={item} key={i} />
        });
        if(!this.props.data.loggedIn){
            return(
                <div className="blogcard loginplease">
                    Please Log In
                </div>
            )
        }
        return(
            <div className="feed">
            <Header title="Feed" />
                <div id="postlist">{elements}
                </div>
                <button id="add" onClick={this.addArticle.bind(this)}>
                    <svg fill="#FFFFFF" height="42" viewBox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg></button>
                <Modal  closeModal={this.closeModal.bind(this)}  show={this.state.modalShow} title={this.state.title} content={this.state.content} username={this.state.username} />
            </div>
        );  
    }
    addArticle(evt){
       this.props.history.push('/add');
    }
    showModal(title,username,content){
        
        this.setState({modalShow:true,title:title,content:content,username:username});
    }
    closeModal(){
        this.setState({modalShow:false});
    }
    
}