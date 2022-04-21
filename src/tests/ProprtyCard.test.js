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
    expect(getByText("dummy-title")).toHaveClass("title-details");
    expect(getByText("dummy-city")).toHaveClass("city-details");
    expect(getByText("dummy-type")).toHaveClass("type-details");
    expect(getByText(3)).toHaveClass("beds-details");
    expect(getByText(2)).toHaveClass("bath-details");
    expect(getByText(100000)).toHaveClass("price-details");
  });
});
