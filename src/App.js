import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './Components/Books.js'

const api_url = 'https://www.googleapis.com/books/v1'
const api_key = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor () {
    super ();
    // initialize state
    this.state = {
      searchTerm: '',
      books: []
    };
  }

  // event handler to capture search input
  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value })
  }

  // event handler to fetch search results
  searchBook = () => {
    const query = this.state.searchTerm
    fetch (`${api_url}/volumes?q=${query}&key=${api_key}`)
    .then (res => res.json())
    .then(data => this.setState({books: data.items}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-body">
          <h1 className="welcome">Welcome to the Google Books Search App!</h1>
          <div>
            <input className="searchBar" type="text" onChange={this.handleSearchInput} value={this.state.searchTerm} placeholder="search books"/>
            <button className="buttonSize" onClick={this.searchBook}>Search</button>
          </div>
          <Books books={this.state.books}/>
        </header>
      </div>
    );
  }
}

export default App;
