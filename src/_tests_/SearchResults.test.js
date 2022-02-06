import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/App";

describe("Search", () => {
  const { asFragment, getByText } = render(<SearchResults />);
  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Search Results/i));
  });
});
