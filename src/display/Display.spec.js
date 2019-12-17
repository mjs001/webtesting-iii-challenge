// Test away!

import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Render the Display", () => {
  render(<Display />);
});

test("Match the current snap shot", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test("Check the UI to make sure we are displaying open and unlocked", () => {
  const { getByText } = render(<Display />);
  expect(getByText(/open/i));
  expect(getByText(/unlocked/i));
});

test("check that display will show closed and locked", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  getByText(/closed/i);
  getByText(/locked/i);
});
