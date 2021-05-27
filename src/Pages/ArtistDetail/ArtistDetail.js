import React from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import ArtistDetailPic from "../../Assets/artistDetail.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function ArtistDetail() {
  return (
    <Grid
      container
      style={{ backgroundColor: "#00008B", height: 600 }}
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <img
          className="logo"
          height="70%"
          width="70%"
          src={ArtistDetailPic}
          alt="logo"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <Typography
          variant="h3"
          style={{ color: "white", textAlign: "center", margin: 10 }}
        >
          Weeknd
        </Typography>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <FacebookIcon style={{ color: "white", margin: 10 }} />

          <Typography
            variant="h6"
            style={{ color: "white", textAlign: "center", margin: 7 }}
          >
            Facebook link
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FacebookIcon style={{ color: "white", margin: 10 }} />

          <Typography
            variant="h6"
            style={{ color: "white", textAlign: "center", margin: 7 }}
          >
            Facebook link
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography style={{ color: "white", margin: 10 }}>To: </Typography>
          <TextField
            id="date"
            type="date"
            style={{ margin: 7, backgroundColor: "white" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography style={{ color: "white", margin: 10 }}>From: </Typography>

          <TextField
            id="date"
            type="date"
            style={{ margin: 7, backgroundColor: "white" }}
          />
        </div>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#FFD700",
            margin: 10,
            alignSelf: "flex-start",
          }}
        >
          Search Event
        </Button>
      </Grid>
    </Grid>
  );
}
