import React, { Component } from 'react'
import '../css/DisplayBooks.css';
import No_image_available from '../css/images/No_image_available.svg'

class Books extends Component {
  render () {
    if (this.props.books.length === 0) {
        return <h2>No books found! Try again!</h2>
    } else {
      return (
        <div>
          {this.props.books.map(book =>
            <div className="displayBook">
              {book.volumeInfo.imageLinks.smallThumbnail? (
                <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} className="imageSize"/>
              ) : (
                <img src={`${No_image_available}`} className="imageSize"/>
              )}

              {book.volumeInfo.title? (
                <h3 className="displayInfo">{book.volumeInfo.title}</h3>
              ) : (
                <h3 className="displayInfo">Info N/A</h3>
              )}

              {book.volumeInfo.authors? (
                <p className="displayInfo">{book.volumeInfo.authors}</p>
              ) : (
                <p>Author Info N/A</p>
              )}

              {book.volumeInfo.publisher? (
                <p className="displayInfo">{book.volumeInfo.publisher}</p>
              ) : (
                <p>Publisher Info N/A</p>
              )}

              <a href={`${book.volumeInfo.infoLink}`} target="_blank" className="displayInfo">More >></a>

            </div>
          )}
        </div>
      )

    }
  }
}
export default Books;
