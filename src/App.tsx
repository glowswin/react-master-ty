import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Father = styled.div`
  font-size: 15px;
`;
const BoxOne = styled.div`
  background-color: teal;
  color: white;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled(BoxOne)`
  background-color: tomato;
`;
function App() {
  return (
    <Father>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
