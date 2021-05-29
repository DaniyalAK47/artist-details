import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import LandingLogo from "../../Assets/landing.png";

export default function Landing({ searchLink }) {
  return (
    <div style={{ margin: 10 }}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", textAlign: "left", marginLeft: 50 }}
          >
            Search About The Lastest Events Of Your Favourite Artists.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => searchLink()}
            style={{
              margin: 20,
              height: 70,
              width: "30%",
              backgroundColor: "#FFD700",
              color: "black",
              fontSize: 20,
            }}
          >
            Search Now
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            className="logo"
            src={LandingLogo}
            width="90%"
            // href="https://www.bandsintown.com/"
            alt="logo"
          />
        </Grid>
      </Grid>
    </div>
  );
}
