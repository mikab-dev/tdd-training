import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("component counter renders with correct text title", () => {
  const { getByTestId } = render(<Counter />);
  const titleElement = getByTestId("title");

  expect(titleElement.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterNumber = getByTestId("counter");

  expect(counterNumber.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const initialInputValue = getByTestId("input");

  expect(initialInputValue.value).toBe("1");
});

test("add button renders +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("add button renders -", () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId("subtract-btn");

  expect(subBtn.textContent).toBe("-");
});

test("change input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");
  const addBtnElement = getByTestId("add-btn");
  const counterElement = getByTestId("counter");

  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnElement);

  expect(counterElement.textContent).toBe("5");
});

test("change input value then clicking on subtract btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");
  const subtractBtnElement = getByTestId("subtract-btn");
  const counterElement = getByTestId("counter");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractBtnElement);

  expect(counterElement.textContent).toBe("-5");
});

test("click on + btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnElement = getByTestId("add-btn");
  const countrElement = getByTestId("counter");

  fireEvent.click(addBtnElement);

  expect(countrElement.textContent).toBe("1");
});

test("click on - btn subtracts 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnElement = getByTestId("subtract-btn");
  const countrElement = getByTestId("counter");

  fireEvent.click(subtractBtnElement);

  expect(countrElement.textContent).toBe("-1");
});

test("adding and then subtracting leads to correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnElement = getByTestId("subtract-btn");
  const addBtnElement = getByTestId("add-btn");
  const countrElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(countrElement.textContent).toBe("20");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);

  expect(countrElement.textContent).toBe("15");
});
