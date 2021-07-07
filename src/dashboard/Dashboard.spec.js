// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

test(" render Dashboard", () => {
  render(<Dashboard />);
});

// Test Default state of the app
test("Testing the default state of the App", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText("Unlocked"));
  expect(getByText("Open"));
  expect(getByText("Lock Gate"));
  expect(getByText("Close Gate"));
});

test(" Test all states of the application", () => {
  // Check that when we click buttons the UI changes
  const { getByText } = render(<Dashboard />);

  // Close The Gate
  const closeButton = getByText("Close Gate");
  expect(closeButton);
  fireEvent.click(closeButton);
  expect(getByText(/open gate/i));
  expect(getByText(/lock gate/i));
  expect(getByText(/unlocked/i));
  expect(getByText(/closed/i));

  // Lock the gate
  const lockButton = getByText("Lock Gate");
  fireEvent.click(lockButton);
  expect(getByText("Locked"));
  expect(getByText("Closed"));
  expect(getByText(/unlock gate/i));
  expect(getByText(/open gate/i));
  expect(getByText(/open gate/i).disabled).toBe(true);

  // Unlock the gate
  const unlockButton = getByText("Unlock Gate");
  fireEvent.click(unlockButton);
  expect(getByText("Unlocked"));
  expect(getByText("Closed"));
  expect(getByText(/lock gate/i));
  expect(getByText(/open gate/i));
  expect(getByText(/open gate/i).disabled).toBe(false);

  // Open the gate
  const openButton = getByText(/open gate/i);
  fireEvent.click(openButton);
  expect(getByText(/unlocked/i));
  expect(getByText(/open/i));
  expect(getByText(/close gate/i));
  expect(getByText(/lock gate/i));
  expect(getByText(/lock gate/i).disabled).toBe(true);
});
