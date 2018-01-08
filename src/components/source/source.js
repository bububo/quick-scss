import React from 'react';

export default class Form extends React.Component {
   constructor(props) {
        super(props);
        this.state ={
            sourceHtml: ''
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        
   }
    
   handleChange(event) {
        this.props.process(event.target.value);  
   }

   handleFocus(event) {
        event.target.select();
   }

   

   render() {
       return (
                <textarea defaultValue="Pass HTML here..." onChange={this.handleChange} onFocus={this.handleFocus}></textarea>
            
       );
   }     
    
}
