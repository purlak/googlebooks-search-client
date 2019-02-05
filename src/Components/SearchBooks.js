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
    this.setState({books : newbooks}, ()=>{
      console.log('Books data changed by SearchBar');
    })
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
