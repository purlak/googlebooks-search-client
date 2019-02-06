import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks.js'
import '../css/DisplayBooks.css';
import No_image_available from '../css/images/No_image_available.png';

class Books extends Component {

  constructor(props) {
    super(props);
    this.getInfoOrDisplayDefault = this.getInfoOrDisplayDefault.bind(this);
  }

  getInfoOrDisplayDefault(data) {
    Object.keys(data.volumeInfo).map(function(key) {
      switch (key)  {
        case 'imageLinks':
          console.log(data.volumeInfo[key]['smallThumbnail'])
          break;
        case 'title':
          console.log(data.volumeInfo[key])
          break;
        case 'authors':
          console.log(data.volumeInfo[key][0])
          break;
        case 'publisher':
          console.log(data.volumeInfo[key])
          break;
        }
      }
    )}

  render () {
      if (typeof(this.props.books) === 'undefined'){
        return (<h3>No books found. Try again.</h3>)
      }
      else if (typeof(this.props.books) !== 'undefined' || this.props.books !== null){
        return (
          <div>
          {this.props.books.map(book =>
            <div className="displayBook">
              {this.getInfoOrDisplayDefault(book)}
            </div>
        )}
        </div>
    )}
  }
}
export default Books;



// {this.props.books.map(book =>
//   <div className="displayBook">
//     <Display book={book}/>
//   </div>
// )}

// {book.volumeInfo.imageLinks? (
//   <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} className="imageSize"/>
// ) : (
//   <img src={`${No_image_available}`} className="imageSize"/>
// )}
//
// {book.volumeInfo.title? (
//   <h3 className="displayInfo">Title: {book.volumeInfo.title}</h3>
// ) : (
//   <h3 className="displayInfo">Title: Info N/A</h3>
// )}
//
// {book.volumeInfo.authors? (
//   <p className="displayInfo">Author: {book.volumeInfo.authors[0]}</p>
// ) : (
//   <p>Author: N/A</p>
// )}
//
// {book.volumeInfo.publisher? (
//   <p className="displayInfo">Publisher: {book.volumeInfo.publisher}</p>
// ) : (
//   <p>Publisher: N/A</p>
// )}
//
// <a href={`${book.volumeInfo.infoLink}`} target="_blank" className="displayInfo">More >></a>
