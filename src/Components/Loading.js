import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Loading() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      {loading ? (
        <div style={{ position: "fixed", top: "50%", left: 0, right: 0 }}>
          <CircularProgress color="black" size={75} thickness={10} />
        </div>
      ) : // <div
      //   style={{
      //     position: "fixed",
      //     top: "50%",
      //     left: 0,
      //     right: 0,
      //   }}
      // >
      //   <CircularProgress color="black" size={75} thickness={10} />
      // </div>
      null}
    </>
  );
}
