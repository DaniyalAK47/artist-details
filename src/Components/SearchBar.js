import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/actions/dataActions";

export default function SearchBar({
  value,
  setValue,
  artistDetailLink,
  search,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        innerRef={search}
        style={{
          backgroundColor: "white",
          margin: 5,
          width: "50%",
        }}
        value={value}
        onChange={(val) => setValue(val.target.value)}
      />
      <Button
        disabled={value === "" ? true : false}
        style={{
          margin: 5,
          backgroundColor: "#FFD700",
          color: "white",
          fontSize: 15,
        }}
        onClick={() => {
          dispatch(getData(value)).then((res) => artistDetailLink());
        }}
      >
        Search
      </Button>
    </>
  );
}
