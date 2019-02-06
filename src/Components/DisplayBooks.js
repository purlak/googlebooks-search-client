import React, { Component } from 'react';
import DataService from '../Services/DataService';
import '../css/DisplayBooks.css';

import No_image_available from '../css/images/No_image_available.png';

class DisplayBooks extends Component {
  constructor (props) {
    super (props);
    this.state = {
      bookData: this.props.book.volumeInfo
    };
  }

  render () {
    const display = DataService.checkData(this.state.bookData)
    return (
      <div className="displayInfo">
        {display}
      </div>
    )}
}

export default DisplayBooks;

// {bookData.title? (
//   <h3 className="displayInfo">Title: {bookData.title}</h3>
// ) : (
//   <h3 className="displayInfo">Title: Info N/A</h3>
// )}
// {bookData.imageLinks? (
//   <img src={`${bookData.imageLinks.smallThumbnail}`} className="imageSize"/>
// ) : (
//   <img src={`${No_image_available}`} className="imageSize"/>
// )}
// <p></p>
// {bookData.authors? (
//   <p className="displayInfo">Author: {bookData.authors[0]}</p>
// ) : (
//   <p>Author: N/A</p>
// )}
//
// {bookData.publisher? (
//   <p className="displayInfo">Publisher: {bookData.publisher}</p>
// ) : (
//   <p>Publisher: N/A</p>
// )}
//
// <a href={`${bookData.infoLink}`} target="_blank" className="displayInfo">More >></a>
