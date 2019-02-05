// the function of this component is to maintain state of the books array.

import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Books from './DisplayBooks.js';

class Search extends Component {
  constructor () {
    super ();
    this.state = {
      books: []
    };
    this.onBooksChange = this.onBooksChange.bind(this);
  }

  onBooksChange(newbooks)  {
    this.setState({books: newbooks})
  }

  render() {
      return (
        <div>
          <div>
            <SearchBar
              books={this.state.books}
              onBooksChange={this.onBooksChange}
            />
          </div>
          <Books books={this.state.books}/>
        </div>
      )
    }
}
export default Search;
