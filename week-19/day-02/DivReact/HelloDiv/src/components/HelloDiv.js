import React from "react";
import Navbar from "./Navbar"
import List from "./List"

class Hello extends React.Component{
  constructor(props){
    super(props);
    this.name = "Tom Riddle";
  }

  render() {
    return (
      <div>
        <Navbar name={this.name}/>
        <List array={this.props.array}/>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
};

export default Hello;
