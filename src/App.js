import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form.js';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1>Quick SCSS</h1>
            </header>

            <Form />
        </div>

        );
    }
}

export default App;
