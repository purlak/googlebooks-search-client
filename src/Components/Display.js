import React, { Component } from 'react';
import DataService from '../Services/DataService'

class Display extends Component {
  render ()   {
    console.log(this.props.book)
    return (
      <p>Test</p>
    )
  }
}

export default Display;
