import React, { Component } from 'react';
import DataService from '../Services/DataService.js';
import '../css/DisplayBooks.css';

class Display extends Component {
  getOrDefault = (key, volumeInfo) => {
    if (volumeInfo[key]) {
      return DataService.searchBook(volumeInfo[key], key)
    }
    return (
      <h2 className="displayInfo">{ key }: N/A</h2>
    )
  }

  render () {
    const { volumeInfo } = this.props.book
    const keys = ['title', 'authors', 'publisher', 'imageLinks', 'infoLink']
    return (
      keys.map((key) => {
        return (
          <div>{ this.getOrDefault(key, volumeInfo) }</div>
        )
      })
    )
  }
}
export default Display;
