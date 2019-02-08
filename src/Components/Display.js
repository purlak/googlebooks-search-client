import React, { Component } from 'react';
import DataService from '../Services/DataService.js'
import '../css/DisplayBooks.css';

class Display extends Component {

  getOrDefault = (key, volumeInfo) => {
    if (volumeInfo[key]) {
        return DataService.searchBook(volumeInfo[key])
    }
    return (
          <p className="displayInfo">{ key }: N/A</p>
    )
  }

  render () {
    const data = this.props.book.volumeInfo
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

// Alternate code
// Object.keys(this.props.book.volumeInfo).map(function(key) {
//   if (keys.includes(key) && (data[key])) {
//     return (
//       <div>
//         {DataService.searchBook(data[key])}
//       </div>
//     )}
//   else if (keys.includes(key) && !(data[key])){
//     return (
//       <div>
//         <p className="displayInfo">{ key }: N/A</p>
//       </div>
//   )}
// })
