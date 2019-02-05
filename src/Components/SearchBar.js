import React, { Component } from 'react';

class SearchBar extends Component {

  render () {
    return (
      <input className="searchBar"
        type="text"
        onChange={this.handleSearchInput}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.fetchBooks()
          }
        }}
        value={this.state.searchTerm}
        placeholder="search books"
      />
      <button className="buttonSize" onClick={this.searchBook}>Search</button>
    )
  }
}

export default SearchBar;
