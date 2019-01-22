import React, { Component, Fragment } from 'react'

class Books extends Component {
  render () {
    if (this.props.books.length === 0) {

        return <h2>No books found! Try again!</h2>
    } else {
      return (
        <Fragment>
          {this.props.books.map(book =>
            <div>
              <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} />
              <h2>{book.volumeInfo.title}</h2>
              <h3>{book.volumeInfo.authors}</h3>
              <h3>{book.volumeInfo.publisher}</h3>

            </div>

          )}
        </Fragment>
      )

    }
  }
}

export default Books;
