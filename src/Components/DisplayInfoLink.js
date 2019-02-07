import React, { Component } from 'react';
import '../css/DisplayBooks.css';

class DisplayInfoLink extends Component {
  render ()   {
    return (
      <a href={`${this.props.data}`} target="_blank" className="displayInfo">More Info>> </a>
    )
  }
}

export default DisplayInfoLink;
