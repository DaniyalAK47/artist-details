import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import ArtistEventsTile from "./ArtistEventsTile";

export default function ArtistEvents() {
  const data = useSelector((state) => state);

  return (
    <>
      {data.getartistsevents && data.getartistsevents.length > 0 ? (
        <div style={{ margin: 40 }}>
          <div style={{ height: 50 }}></div>

          <Typography
            variant="h3"
            style={{
              textAlign: "left",
              margin: 20,
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            Event Details
          </Typography>
          <div style={{ height: 30 }}></div>

          <Grid container justify="center" spacing={5}>
            {data.getartistsevents.map((val) => (
              <Grid item>
                <ArtistEventsTile
                  date={val.datetime}
                  description={val.description}
                  venueName={val.venue.name}
                  city={val.venue.city}
                  country={val.venue.country}
                  eventLink={val.url}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : data.initEvent ? null : (
        <Grid
          container
          style={{ backgroundColor: "white", height: 200 }}
          alignItems="center"
          justify="center"
        >
          <Typography
            variant="h3"
            style={{ color: "black", textAlign: "center", margin: 10 }}
          >
            Sorry, No Event Found On The Specified Dates!
          </Typography>
        </Grid>
      )}
    </>
  );
}
