import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("property card render", () => {
  const validProps = {
    title: "dummy-title",
    type: "dummy-type",
    bedrooms: 3,
    bathrooms: 2,
    price: 100000,
    city: "dummy-city",
    email: "dummy@dummy.com",
  };
  it("renders property card correctly", () => {
    const { asFragment } = render(<PropertyCard {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct information for each prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("dummy-title")).toHaveClass("card-title");
    expect(getByText("dummy-city")).toHaveClass("card-city");
    expect(getByText("dummy-type")).toHaveClass("card-type");
    expect(getByText(3)).toHaveClass("card-beds");
    expect(getByText(2)).toHaveClass("card-baths");
    expect(getByText(100000)).toHaveClass("card-price");
    expect(getByText("dummy-city")).toHaveClass("card-city");
    expect(getByText("dummy@dummy.com")).toHaveClass("card-email");
  });
});
