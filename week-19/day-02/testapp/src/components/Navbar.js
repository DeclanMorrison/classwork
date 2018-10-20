import React from "react";

class Navbar extends React.Component{
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Hello, My name is {this.props.name}.</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    )
  }
};

export default Navbar;