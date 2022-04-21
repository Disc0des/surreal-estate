import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("View NavBar", () => {
  it("renders navbar when page is loaded", () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Navlinks are visible", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Add Property")).toHaveClass("navbar-label");
    expect(getByText("View Properties")).toHaveClass("navbar-label");
  });
});
