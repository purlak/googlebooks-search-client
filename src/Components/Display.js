import React, { Component } from 'react';
import DataService from '../Services/DataService.js'

import '../css/DisplayBooks.css';

class Display extends Component {

  render () {
    const data = this.props.book.volumeInfo
    const keys = ['title', 'authors', 'publisher', 'imageLinks', 'infoLink']
    return (
      Object.keys(this.props.book.volumeInfo).map(function(key) {
        if (keys.includes(key) && (data[key])) {
          return (
            <div>
              {DataService.searchBook(data[key])}
            </div>
          )}
        else if (keys.includes(key)) {
          return (
            <div>
              <p className="displayInfo">{ key }: N/A</p>
            </div>
        )}
      })
    )
  }
}

export default Display;
