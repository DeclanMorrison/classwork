import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>Here's some stuff I like:</p>
              </div>
              <div className="card-action">
                <ul>
                  {this.props.array.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
};

export default List;