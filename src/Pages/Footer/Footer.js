import React from "react";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#10143B",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <FacebookIcon
          style={{ color: "white", fontSize: 50, marginRight: 10 }}
        />
        <InstagramIcon
          style={{ color: "white", fontSize: 50, marginRight: 10 }}
        />
        <TwitterIcon
          style={{ color: "white", fontSize: 50, marginRight: 10 }}
        />
      </div>
      <Typography
        variant="h6"
        style={{ color: "white", fontFamily: "Segoe UI" }}
      >
        Created By: Daniyal Ahmed Khan
      </Typography>
    </div>
  );
}
