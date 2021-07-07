// Test away!

import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import React from "react";
test("Render controls", () => {
  render(<Controls />);
});

test("Matching snapshot created", () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test("Check the default state of the controls", () => {
  const { getByText } = render(<Controls />);
  expect(getByText(/close gate/i));
  expect(getByText(/lock gate/i));
  expect(getByText(/lock gate/i).disabled).toBe(true);
});

test("Check for open gate control on the page when gate is locked", () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  expect(getByText(/open gate/i).disabled).toBe(true);
});

test("Check for lock gate controls on the page when gate is open", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);
  expect(getByText(/close gate/i).disabled).toBe(false);
});
