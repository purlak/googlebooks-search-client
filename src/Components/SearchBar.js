import React, { Component } from 'react';
import BookService from '../Services/BookService.js';
import '../css/App.css';

class SearchBar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchTerm: '',
      books: this.props.books,
    };
  }
  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value });
  }

  searchBook = () =>  {
    BookService.fetchBooks(this.state.searchTerm)
      .then(data => this.props.onBooksChange(data.items))
  }

  render () {
    return (
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
  )}
}

export default SearchBar;
