import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../Components/SearchBar";
import { ExpansionPanelActions } from "@material-ui/core";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBar />);

  expect(queryByTestId("search-button")).toBeTruthy();
});

describe("Search button", () => {
  it("is not disabled", () => {
    const { queryByTestId, queryByPlaceholderText } = render(<SearchBar />);
    const searchInput = queryByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(queryByTestId("search-button")).not.toBeDisabled();
  });
});
