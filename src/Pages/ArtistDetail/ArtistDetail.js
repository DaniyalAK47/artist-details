import React, { useState } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/actions/dataActions";
import moment from "moment";

export default function ArtistDetail({ artistEventLink }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <>
      {data.getartists ? (
        <>
          <Grid
            container
            style={{ backgroundColor: "#00008B", height: "60%" }}
            alignItems="center"
          >
            <div />
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ margin: 20 }}
                className="logo"
                width="70%"
                src={data.getartists.thumb_url}
                alt="logo"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography
                variant="h1"
                style={{ color: "white", textAlign: "center", margin: 10 }}
              >
                {data.getartists.name}
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  marginLeft: 50,
                }}
              >
                <FacebookIcon
                  style={{
                    color: "white",
                    // backgroundColor: "red",
                    margin: 10,
                    width: 50,
                  }}
                />

                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    textAlign: "center",
                    margin: 7,
                  }}
                >
                  {data.getartists.facebook_page_url}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  marginLeft: 50,
                }}
              >
                <Typography style={{ color: "white", margin: 10, width: 50 }}>
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  marginLeft: 50,
                }}
              >
                <Typography style={{ color: "white", margin: 10, width: 50 }}>
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

              <Button
                variant="contained"
                disabled={to !== "" && from !== "" ? false : true}
                onClick={() => {
                  dispatch(
                    getData(
                      data.getartists.name,
                      "events",
                      moment(from).format("YYYY-MM-DD") +
                        "," +
                        moment(to).format("YYYY-MM-DD")
                    )
                  ).then((res) => artistEventLink());
                }}
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
      ) : data.init ? null : (
        <Grid
          container
          style={{ backgroundColor: "#00008B", height: 200 }}
          alignItems="center"
          justify="center"
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center", margin: 10 }}
          >
            Sorry, No Such Artist Found!
          </Typography>
        </Grid>
      )}
    </>
  );
}
