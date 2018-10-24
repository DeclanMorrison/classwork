import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends : friends
  };

  removeFriend = (id) => {
    this.setState({friends : this.state.friends.filter((value, index) => value.id !== id)});
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map((value, index) => <FriendCard name={value.name} image={value.image} occupation={value.occupation} location={value.location} id={value.id} handler={this.removeFriend}/>)}
      </Wrapper>
    )
  };
};

export default App;
