import React, { Component } from 'react';
import '../css/DisplayBooks.css';
import No_image_available from '../css/images/No_image_available.png';

class Books extends Component {

  render () {
      if (typeof(this.props.books) === 'undefined'){
        return (<h3>No books found. Try again.</h3>)
      }
      else if (typeof(this.props.books) !== 'undefined' || this.props.books !== null){
        return (
          <div>
            {this.props.books.map(book =>
              <div className="displayBook">
                  <Display />
              <div>    
            )}
          </div>
        )}
      }
}
export default Books;
