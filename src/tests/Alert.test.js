import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("alert bar", () => {
  it("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });
  it("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!" success />);
    expect(getByText(/Success/).textContent).toBe("Success!");
  });
  it("does not render if message prop is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
  it("renders an error when value of message is error", () => {
    const { asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
  it("renders success when value of message is success", () => {
    const { asFragment } = render(<Alert message="Success!" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
