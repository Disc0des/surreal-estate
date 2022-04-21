import React from "react";
import { render } from "@testing-library/react";
import SideBar from "../components/SideBar";

describe("View SideBar", () => {
  it("renders sidebar when page is loaded", () => {
    const { asFragment } = render(<SideBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
