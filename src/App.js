import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const googleBooksApiUrl = 'https://www.googleapis.com/books'

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
  searchBook = () => {
    const query = this.state.searchTerm
    fetch (`${googleBooksApiUrl}/v1/volumes?q=${query}&key=AIzaSyC6w6GQQMSEp_zUJ9ycieu8vr0sSK1qX4Y`)
    .then (res => res.json())
    .then(data => console.log(data))
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
