import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    incrementCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    render() {
      return (
        <OriginalComponent
          name="chaitali"
          counter={this.state.counter}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
