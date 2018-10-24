import React from "react";
import HelloDiv from "./components/HelloDiv";

const things = ["Dogs", "Cats", "Killing", "Magic", "Killing", "Being Lonely"];

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HelloDiv array={things}/>
    )
  }
};

export default App;
