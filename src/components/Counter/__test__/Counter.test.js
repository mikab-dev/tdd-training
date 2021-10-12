import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
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
