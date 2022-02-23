import React from "react";
import styled, { keyframes } from "styled-components";
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
const anim = keyframes`
  0%{
    color:red;
  }
  60%{
    color:black;
  }
  100%{
    color:yellow;
  }
`;
const SpanText = styled.span`
  animation: ${anim} 5s infinite;
`;
const InputBox = styled.input.attrs({ require: true, maxLength: 20 })`
  background-color: #c9c9c9;
`;
const Btn = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  ${SpanText} {
    &:hover {
      font-size: 100px;
    }
  }
`;
function App() {
  return (
    <Father>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" text="new Text" />
      <InputBox />
      <Btn>
        <SpanText>유후후후</SpanText>
      </Btn>
      <Btn as="a">
        <SpanText>dkjfkdjkf</SpanText>
      </Btn>
    </Father>
  );
}

export default App;
