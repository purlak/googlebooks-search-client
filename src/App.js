import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // initialize state
  state = {
    searchTerm: ''
  }

  // Event handler for search
  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value })
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the Google Books Search App!</h1>
        </header>
        <div className="App-intro">
          <input type="text" onChange={this.handleSearchInput} value={this.state.searchTerm}/>
        </div>
      </div>
    );
  }
}

export default App;
