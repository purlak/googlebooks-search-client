  import React from 'react'
  import '../css/DisplayBooks.css';
  import No_image_available from '../css/images/No_image_available.png';

  const DataService = {
    checkData (data){
      // console.log(typeof(data))
      // debugger
      Object.keys(data).map(function(key) {
        console.log(key, ":", data[key])
        return (<h3 className="displayInfo">
            key: {data[key]}
        </h3>
      )
      })
    }
  }

  export default DataService;

  // {
  //   console.log(data,key)
  //   return data? (
  //     <h3 className="displayInfo">{data.key}</h3>
  //   ) : (
  //     <h3 className="displayInfo">Data N/A</h3>
  //   )
  // }
