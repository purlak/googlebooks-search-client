import React, { Component } from 'react';
import '../css/DisplayBooks.css';


class DisplayBooks extends Component {
  render ()   {
    console.log(this.props.data)
    switch (typeof(this.props.data)) {
      case 'string':
        return (<h2 className="displayInfo">{this.props.data}</h2>)
        break;
      case 'object':
        return (<h2 className="displayInfo">{this.props.data[0]}</h2>)
        break;
    }
  }
}
export default DisplayBooks;
// <img src={`${this.props.data.imageLinks.smallThumbnail}`} className="imageSize">
// <p className="displayInfo">Author: {this.props.data.authors[0]}</p>
// <h3 className="displayInfo">Title: {this.props.data.title}</h3>
//
// <p className="displayInfo">Publisher: {this.props.data.publisher}</p>
// <a href={`${this.props.data.infoLink}`} target="_blank" className="displayInfo">More >></a>
