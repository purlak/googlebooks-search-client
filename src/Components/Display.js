import React, { Component } from 'react';
import DataService from '../Services/DataService';
import No_image_available from '../css/images/No_image_available.png';

class Display extends Component {

  render () {
    const bookData = this.props.book.volumeInfo;
    return (
      <div>
      {bookData.imageLinks? (
        <img src={`${bookData.imageLinks.smallThumbnail}`} className="imageSize"/>
      ) : (
        <img src={`${No_image_available}`} className="imageSize"/>
      )}

      {bookData.title? (
        <h3 className="displayInfo">Title: {bookData.title}</h3>
      ) : (
        <h3 className="displayInfo">Title: Info N/A</h3>
      )}

      {bookData.authors? (
        <p className="displayInfo">Author: {bookData.authors[0]}</p>
      ) : (
        <p>Author: N/A</p>
      )}

      {bookData.publisher? (
        <p className="displayInfo">Publisher: {bookData.publisher}</p>
      ) : (
        <p>Publisher: N/A</p>
      )}

      <a href={`${bookData.infoLink}`} target="_blank" className="displayInfo">More >></a>
      </div>
    )}
}

export default Display;
