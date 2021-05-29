import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import moment from "moment";

export default function ArtistEventsTile({
  date,
  description,
  venueName,
  city,
  country,
  eventLink,
}) {
  return (
    <Card elevation={8} style={{ width: 400 }}>
      <CardContent>
        <Typography
          variant="h4"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          {moment(date).format("LL")}
        </Typography>

        <Divider />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LocationOnIcon style={{ margin: 5 }} />
          <Typography
            variant="h6"
            noWrap={true}
            style={{ textAlign: "left", margin: 5 }}
          >
            {venueName}
          </Typography>
        </div>
        <Divider />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <PublicIcon style={{ margin: 5 }} />
          <Typography
            variant="h6"
            noWrap={true}
            style={{ textAlign: "left", margin: 5 }}
          >
            {city},{country}
          </Typography>
        </div>
        <Divider />
      </CardContent>
      <CardActions>
        <Button variant="contained"> Visit Event Page</Button>
      </CardActions>
    </Card>
  );
}
