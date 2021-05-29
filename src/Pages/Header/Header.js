import React, { useState } from "react";
import { AppBar, Grid } from "@material-ui/core";
import Logo from "../../Assets/bandsintown.png";
import SearchBar from "../../Components/SearchBar";

export default function Header({ artistDetailLink, search }) {
  const [value, setValue] = useState("");

  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "#00008B", height: "30%" }}
    >
      <Grid container alignItems="center" style={{ marginTop: 10 }}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <img
            className="logo"
            width="60%"
            src={Logo}
            href="https://www.bandsintown.com/"
            alt="logo"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <SearchBar
            value={value}
            setValue={setValue}
            artistDetailLink={artistDetailLink}
            search={search}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}
