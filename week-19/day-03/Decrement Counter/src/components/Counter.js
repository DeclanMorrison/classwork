import React from "react";
import Button from "./Button";


class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <Button handler={this.handleIncrement} text="Increment"/>
          <Button handler={this.handleDecrement} text="Decrement"/>
        </div>
      </div>
    );
  };
};

export default Counter;
