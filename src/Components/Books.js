import React, { Component } from 'react'
import '../Books.css';

class Books extends Component {
  render () {
    if (this.props.books.length === 0) {
        return <h2>No books found! Try again!</h2>
    } else {
      return (
        <div>
          {this.props.books.map(book =>
            <div className="displayBook">
              <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} className="imageSize"/>
              <h3 className="displayTitle">{book.volumeInfo.title}</h3>
              <p className="displayTitle">{book.volumeInfo.authors}</p>
              <p className="displayTitle">{book.volumeInfo.publisher}</p>
              <a href={`${book.volumeInfo.infoLink}`} target="_blank" className="displayTitle">More Info</a>
              <br/>
            </div>
          )}
        </div>
      )

    }
  }
}
export default Books;
