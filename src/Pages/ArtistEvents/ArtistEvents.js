import React from "react";
import { Grid, Typography } from "@material-ui/core";

import ArtistEventsTile from "./ArtistEventsTile";

export default function ArtistEvents() {
  const data = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ];

  return (
    <div>
      <div style={{ height: 50 }}></div>
      <Typography variant="h3" style={{ textAlign: "left", margin: 20 }}>
        Event Details
      </Typography>
      <Grid container justify="center" spacing={5}>
        {data.map((val) => (
          <Grid item>
            <ArtistEventsTile />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
