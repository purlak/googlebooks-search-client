import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Books from './DisplayBooks.js';

// const api_url = 'https://www.googleapis.com/books/v1'
// const api_key = process.env.REACT_APP_API_KEY;

class Search extends Component {
  constructor () {
    super ();
    this.state = {
      // searchTerm: '',
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
    console.log(this.state.books)

      return (
        <div>
          <div>
            <SearchBar
              books={this.state.books}
              onBooksChange={this.onBooksChange}
            />
          </div>
          <Books books={this.state.newbooks}/>
        </div>
      )
    }
}
export default Search;
