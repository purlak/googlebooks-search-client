import React, { Component } from 'react';
import Books from './DisplayBooks.js';
import PropTypes from 'prop-types';

const api_url = 'https://www.googleapis.com/books/v1'
const api_key = process.env.REACT_APP_API_KEY;

class Search extends Component {
  constructor () {
    super ();
    this.state = {
      searchTerm: '',
      books: []
    };
  }

  handleSearchInput = event => {
    event.preventDefault();
    this.setState({searchTerm: event.target.value });
  }

  searchBook = () => {
    const query = this.state.searchTerm;
    fetch (`${api_url}/volumes?q=${query}&key=${api_key}`)
    .then (res => res.json())
    .then(data => this.setState({books: data.items}))
  }

  render() {
      return (
        <div className="App">
          <header className="App-body">
            <h1 className="welcome">Welcome to the Books Search App!</h1>
            <div>
              <input className="searchBar"
                type="text"
                onChange={this.handleSearchInput}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.searchBook()
                  }
                }}
                value={this.state.searchTerm}
                placeholder="search books"
              />
              <button className="buttonSize" onClick={this.searchBook}>Search</button>
            </div>
            <Books books={this.state.books}/>
          </header>
        </div>
      )
    }
}
export default Search;
