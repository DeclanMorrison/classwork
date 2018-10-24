import React from "react";
import "./Style.css";

const Friend = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.img.alt}
        src={props.img.src}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
);

export default Friend;
