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
