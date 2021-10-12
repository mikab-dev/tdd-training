import React from "react";
import Counter from "./components/Counter/Counter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function App() {
  return (
    <Wrapper>
      <Counter />
    </Wrapper>
  );
}

export default App;
