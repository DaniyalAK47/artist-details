import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions/dataActions";

export default function SearchBar({
  value,
  setValue,
  artistDetailLink,
  search,
}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getartists);

  return (
    <>
      <TextField
        placeholder="Search"
        autoFocus={search}
        style={{
          backgroundColor: "white",
          margin: 5,
          width: "50%",
          padding: 4,
        }}
        data-testid="searchBar"
        value={value}
        onChange={(val) => setValue(val.target.value)}
      />
      <Button
        disabled={value === "" ? true : false}
        data-testid="search-button"
        style={{
          margin: 5,
          backgroundColor: "#CFA348",
          fontSize: 15,
        }}
        onClick={() => {
          if (data === "") {
            dispatch(getData(value)).then((res) => artistDetailLink());
          } else if (data.name === value) {
            artistDetailLink();
          } else {
            dispatch(getData(value)).then((res) => artistDetailLink());
          }
        }}
      >
        Search
      </Button>
    </>
  );
}
