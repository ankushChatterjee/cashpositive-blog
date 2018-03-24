import React from 'react';

export default class BlogCard extends React.Component{
    render(){
        let title = this.props.data.blogTitle;
        let content = this.props.data.blogContent;
        return(<div> 
        <div className="blogcard">
            <img className="picture" src={this.props.data.picture} />
            <div className="textcontent">
                <span onClick={this.callModal.bind(this)} id="readmore"> Read More </span>
                 <div className="blogTitle">{this.props.data.blogTitle}</div>
                <div className="username">by {this.props.data.username}</div>
                <div className="blogContent">{this.props.data.blogContent}</div>
            </div>
        </div></div>
        );
    }
    callModal(){
        console.log(this.props.username);
        this.props.showModal(this.props.data.blogTitle,this.props.data.username,this.props.data.blogContent);
    }
}