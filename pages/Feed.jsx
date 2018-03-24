import React from 'react';
import {connect} from 'react-redux';
import BlogCard from '../components/BlogCard';

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
        // if(!this.props.data.loggedIn){
        //     return(<div>Please Log In</div>)
        // }
        return(
            <div className="feed">
                <div>{elements}
                </div>
                <button onClick={this.addArticle.bind(this)}>ADD</button>
            </div>
        );  
    }
    addArticle(evt){
        this.props.dispatch({type:'ACTION_ADD',payload:{
            username:"kush",
            picture:"https://randomuser.me/api/portraits/men/77.jpg",
            blogTitle:"A treatise of Chemistry",
            blogContent:"I love chemistry"
        }});
    }
}