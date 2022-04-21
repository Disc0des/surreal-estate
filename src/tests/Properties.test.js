import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("View Properties page", () => {
  it("renders property cards container when GET request returns results", () => {
    const { getByText } = render(<Properties />);
    expect(getByText()).toMatchSnapshot();
  });
});
