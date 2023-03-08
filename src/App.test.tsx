import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders ComponentA", () => {
  render(<App />);
  const paragraph = screen.getByText(/ComponentA/i);
  const button = screen.getByText(/Set boo to baz/i);
  expect(paragraph).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(button.textContent).toBe("Set baz to baz");
});
