import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter/Counter";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "nitesh",
  //     counter: -1,
  //   };
  // }
  componentDidMount() {
    console.log("componentdimount");
  }
  // handleShowAlert = () => {
  //   alert("Hello Everyone!");
  // };
  // handleAddition = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };
  // handleSubtract = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <div className="App" key="1">
        {/* <button onClick={this.handleShowAlert}>Show Alert</button>
        <div>
          <button onClick={this.handleAddition}>ADD</button>
          {/* <div>{this.state.counter}</div> */}
        {/* <Counter counterValue={this.state.counter} key="1" /> */}
        {/* <button onClick={this.handleSubtract}>Sub</button>
        </div> */}
      </div>
    );
  }
}

export default App;
