import React from 'react';
import '../css/DisplayBooks.css';

const DataService = {
  searchBook(data, key) {
    switch (key) {
      case 'title':
        return (
          <div> <h2 className="displayInfo">Title: {data}</h2> </div>
        )
      case 'authors':
        return (
          <div> <h2 className="displayInfo">Author: {data[0]}</h2> </div>
        )
      case 'publisher':
        return (
          <div> <h2 className="displayInfo">Publisher: {data}</h2> </div>
        )
      case 'imageLinks':
        return (
          <div> <img src={`${data.smallThumbnail}`} className="imageSize"/> </div>
        )
      case 'infoLink':
        return (
          <div> <a href={`${data}`} target="_blank" className="displayInfo">More Info>></a> </div>
        )
      default:
        return;
      }
  }
}
export default DataService;
