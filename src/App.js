import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // initialize state
  state = {
    searchTerm: ''
  }

  // event handler to capture search input
  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value })
  }

  // event handler to send API request for search results
  searchBook = event => {

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
          <button onClick={this.searchBook}>Search</button>
        </div>
      </div>
    );
  }
}

export default App;
