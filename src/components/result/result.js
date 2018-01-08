
import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);  
    }

    handleFocus(event) {
        event.target.select();
    }
    
    render() {
       
        return ( 
                <textarea  value={this.props.result} readOnly onFocus={this.handleFocus}></textarea>  
        );
    }     
    
}
