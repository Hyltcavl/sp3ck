import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("Passes the canary test", () => {
    const bool: boolean = true;
    expect(bool).toBeTruthy();
  });

  it("Renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Backend ping", () => {
  it("Passes the canary test", () => {
    const bool: boolean = true;
    expect(bool).toBeTruthy();
  });
});
