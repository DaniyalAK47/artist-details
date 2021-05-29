import React, { useRef } from "react";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import ArtistDetail from "./ArtistDetail/ArtistDetail";
import ArtistEvents from "./ArtistEvents/ArtistEvents";
import Loading from "../Components/Loading";
import Footer from "./Footer/Footer";

export default function Index() {
  let search = useRef(null);
  const artistDetail = useRef(null);
  const artistEvent = useRef(null);

  const artistDetailLink = () =>
    artistDetail.current.scrollIntoView({ behaviour: "smooth" });

  const artistEventLink = () =>
    artistEvent.current.scrollIntoView({ behaviour: "smooth" });

  const searchLink = () => search.current.focus();

  return (
    <div className="App">
      <Loading />
      <Header artistDetailLink={artistDetailLink} search={search} />
      <Landing searchLink={searchLink} />
      <div ref={artistDetail}>
        <ArtistDetail artistEventLink={artistEventLink} />
      </div>
      <div ref={artistEvent}>
        <ArtistEvents />
      </div>
      <Footer />
    </div>
  );
}
