import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";

export default function ArtistEventsTile() {
  return (
    <Card elevation={8}>
      <CardContent>
        <Typography
          variant="h4"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          8 Oct, 2021
        </Typography>
        <Typography variant="body1" style={{ textAlign: "left", margin: 5 }}>
          This is the description
        </Typography>
        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LocationOnIcon style={{ margin: 5 }} />
          <Typography variant="h6" style={{ textAlign: "left", margin: 5 }}>
            White River Amphitheatre
          </Typography>
        </div>
        <Divider />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <PublicIcon style={{ margin: 5 }} />
          <Typography variant="h6" style={{ textAlign: "left", margin: 5 }}>
            Auburn,United States
          </Typography>
        </div>
        <Divider />

        <div style={{ margin: 5 }}>
          <Button variant="contained"> Visit Event Page</Button>
        </div>
      </CardContent>
    </Card>
  );
}
