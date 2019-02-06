import React, { Component } from 'react';
import './css/App.css';
import Search from './Components/SearchBooks.js';
import { Offline, Online } from "react-detect-offline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="welcome">Welcome to the Books Search App!</h1>
          <Online>
            <Search />
          </Online>
          <Offline>
            You're offline right now. Check your connection.
          </Offline>
        </div>
      </div>
    )
  }
}
export default App;
