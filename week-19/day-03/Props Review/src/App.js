import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Friend from "./components/Friend"
import friends from "./friends.json"

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map((value, index) => <Friend key={index} img={{alt : value.alt, src : value.image}} name={value.name} occupation={value.occupation} location={value.location}/>)}  
  </Wrapper>
);

export default App;
