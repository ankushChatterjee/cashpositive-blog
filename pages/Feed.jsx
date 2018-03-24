import React from 'react';
import {connect} from 'react-redux';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import '../styles/feed.css';

@connect((store)=>{
    return {
        data:store
    }
})
export default class Feed extends React.Component{
    render(){
        let i=0;
        let elements = this.props.data.articles.map(item=>{
            i++;
            return <BlogCard data={item} key={i} />
        });
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
                </div>
        );  
    }
    addArticle(evt){
       this.props.history.push('/add');
    }
}