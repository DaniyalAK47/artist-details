import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import ArtistDetailPic from "../../Assets/artistDetail.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/actions/dataActions";
import moment from "moment";

export default function ArtistDetail() {
  const data = useSelector((state) => state.getartists);
  const dispatch = useDispatch();

  const [to, setTo] = useState();
  const [from, setFrom] = useState();

  return (
    <>
      {data ? (
        <>
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
                src={data.thumb_url}
                alt="logo"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography
                variant="h3"
                style={{ color: "white", textAlign: "center", margin: 10 }}
              >
                {data.name}
              </Typography>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <FacebookIcon style={{ color: "white", margin: 10 }} />

                <Typography
                  variant="h6"
                  style={{ color: "white", textAlign: "center", margin: 7 }}
                >
                  {data.facebook_page_url}
                </Typography>
              </div>
              {/* <div style={{ display: "flex", flexDirection: "row" }}>
                <FacebookIcon style={{ color: "white", margin: 10 }} />

                <Typography
                  variant="h6"
                  style={{ color: "white", textAlign: "center", margin: 7 }}
                >
                  Facebook link
                </Typography>
              </div> */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "white", margin: 10 }}>
                  To:{" "}
                </Typography>
                <TextField
                  id="date"
                  value={to}
                  onChange={(val) => setTo(val.target.value)}
                  type="date"
                  style={{ margin: 7, backgroundColor: "white" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ color: "white", margin: 10 }}>
                  From:{" "}
                </Typography>
                <TextField
                  id="date"
                  value={from}
                  onChange={(val) => setFrom(val.target.value)}
                  type="date"
                  // onChange={(val)=>}
                  style={{ margin: 7, backgroundColor: "white" }}
                />
              </div>

              <Button
                variant="contained"
                onClick={() =>
                  dispatch(
                    getData(
                      "artists/" + "Maroon" + "/" + "events",
                      moment(to).format("YYYY-MM-DD") +
                        "," +
                        moment(from).format("YYYY-MM-DD") +
                        "/events"
                    )
                  )
                }
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
        </>
      ) : null}
    </>
  );
}
