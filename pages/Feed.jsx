import React from 'react';
import {connect} from 'react-redux';
import BlogCard from '../components/BlogCard';

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
                <div>{elements}
                </div>
                <button onClick={this.addArticle.bind(this)}>ADD</button>
            </div>
        );  
    }
    addArticle(evt){
       this.props.history.push('/add');
    }
}