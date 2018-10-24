import React from "react";

const Button = (props) => (
  <button className="btn btn-primary" onClick={props.handler}>
    {props.text}
  </button>
);

export default Button;