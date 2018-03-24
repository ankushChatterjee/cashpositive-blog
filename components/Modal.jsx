import React from 'react';
import '../styles/modal.css';
export default class Modal extends React.Component{
    render(){
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
                            <p className="modalContent" >{this.props.content}</p>
                        </div>
            </div>
        )
    }
}