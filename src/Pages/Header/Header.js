import React from "react";
import {
  AppBar,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Logo from "../../Assets/bandsintown.png";

export default function Header() {
  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "#00008B", height: 100 }}
    >
      <Grid container alignItems="center" style={{ marginTop: 10 }}>
        <Grid item xs={0} sm={0} md={3} lg={3}>
          <FacebookIcon style={{ margin: 10 }} />
          <InstagramIcon style={{ margin: 10 }} />
          <TwitterIcon style={{ margin: 10 }} />
        </Grid>

        <Grid item xs={5} sm={5} md={5} lg={5}>
          <img
            className="logo"
            src={Logo}
            href="https://www.bandsintown.com/"
            alt="logo"
          />
        </Grid>

        <Grid item xs={7} sm={7} md={4} lg={4}>
          <TextField
            style={{ backgroundColor: "white", margin: 5, width: "90%" }}
            label="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}
