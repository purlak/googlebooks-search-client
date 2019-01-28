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
              <h3 className="displayInfo">{book.volumeInfo.title}</h3>
              <p className="displayInfo">{book.volumeInfo.authors}</p>
              <p className="displayInfo">{book.volumeInfo.publisher}</p>
              <a href={`${book.volumeInfo.infoLink}`} target="_blank" className="displayInfo">More >></a>
              <br/>
            </div>
          )}
        </div>
      )

    }
  }
}
export default Books;
