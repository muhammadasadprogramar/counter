import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Container>
        <Header></Header>
        <Counter></Counter>
        <Buttons></Buttons>
        <Input></Input>
      </Container>
    </div>
  );
};

export default App;
