import React, { Component, Fragment } from 'react'

class Books extends Component {
  render () {
    console.log(this.props.books)
    if (this.props.books.length === 0) {

        return <h2>No books found! Try again!</h2>
    } else {
      return (
        <Fragment>
          {this.props.books.map(book => <h2>{book.volumeInfo.title}</h2>)}
        </Fragment>
      )

    }
  }
}

export default Books;
