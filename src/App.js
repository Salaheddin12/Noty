import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navBar";
import Body from "./Components/body";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
