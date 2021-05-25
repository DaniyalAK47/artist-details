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

export default function Header() {
  <AppBar>
    <Grid container>
      <Grid item>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </Grid>

      <Grid item>
        <img
          className="logo"
          src="../../../public/bandsintown.png"
          href="https://www.bandsintown.com/"
          alt="logo"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          label="Search.."
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
  </AppBar>;
}
