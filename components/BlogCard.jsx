import React from 'react';

export default class BlogCard extends React.Component{
    render(){
        return(
        <div className="blogcard">
            <img className="picture" src={this.props.data.picture} />
            <div className="username">{this.props.data.username}</div>
            <div className="blogTitle">{this.props.data.blogTitle}</div>
            <div className="blogContent">{this.props.data.blogContent}</div>
        </div>
        );
    }
}