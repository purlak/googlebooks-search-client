import React, { Component } from 'react';
import '../css/DisplayBooks.css';

class DisplayImage extends Component {
  render ()   {
    return (
      <img src={`${this.props.data.smallThumbnail}`} className="imageSize"/>
    )
  }
}

export default DisplayImage;
