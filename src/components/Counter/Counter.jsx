import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  border: 2px solid red;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  text-transform: uppercase;
  height: 60px;
  width: 50px;
  font-size: 30px;
`;

const CounterValue = styled.h2`
  font-size: 50px;
`;

const InputCounter = styled.input`
  font-size: 30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  console.log({ inputValue, count });

  const addToCounter = () => {
    setCount(count + inputValue);
  };
  const subtractFromCounter = () => {
    setCount(count - inputValue);
  };

  return (
    <>
      <h1 data-testid="title">My Counter</h1>
      <CounterValue data-testid="counter">{count}</CounterValue>
      <Wrapper>
        <Container>
          <Btn onClick={subtractFromCounter}>-</Btn>
          <InputCounter
            data-testid="input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseInt(e.target.value, 10))}
          ></InputCounter>
          <Btn onClick={addToCounter}>+</Btn>
        </Container>
      </Wrapper>
    </>
  );
};

export default Counter;
