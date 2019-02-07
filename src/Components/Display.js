import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks.js';
import DisplayImage from './DisplayImage.js';
import DisplayInfoLink from './DisplayInfoLink.js';

import '../css/DisplayBooks.css';

class Display extends Component {

  render () {
    const data = this.props.book.volumeInfo
    const key1 = ['title', 'authors', 'publisher']
    const key2 = ['imageLinks']
    const key3 = ['infoLink']

    return (

    Object.keys(this.props.book.volumeInfo).map(function(key) {
      if (key2.includes(key) && data[key]) {
        return (
          <DisplayImage data={data[key]}/>
      )}

      else if (key1.includes(key) && data[key]) {
        return (
          <DisplayBooks data={data[key]} />
        )
      }

      else if (key3.includes(key) && data[key]) {
        return (
          <DisplayInfoLink data={data[key]} />
        )
      }

      else if (key1.includes(key) || key2.includes(key)) return (
        <div>
          <p className="displayInfo">{ key }: N/A</p>
        </div>
      )
    })

  )
  }
}

export default Display;
