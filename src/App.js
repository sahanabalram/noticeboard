import React, { Component } from 'react';
import NavbarContainer from "./component/Navbar";
import JumbotronContainer from "./component/Jumbotron";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer/>
        <JumbotronContainer/>
      </div>
    );
  }
}

export default App;
