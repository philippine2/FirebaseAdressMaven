import React, { Component } from 'react';
import logo from './images/tree-of-life.png';

class App extends Component {
    render() {
        //const {classes}= this.props;
        return (
            <div>
                <h1>Address Simple Home</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default App;
