import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../Components/SearchBar";
import { ExpansionPanelActions } from "@material-ui/core";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBar />);

  expect(queryByPlaceholderText("Search")).toBeTruthy();
});

// search bar to be empty
it("should be empty initially", () => {
  const { getByTestId } = render(<SearchBar />);
  expect(getByTestId("searchBar")).toHaveTextContent("");
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchBar />);
    const searchInput = queryByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
