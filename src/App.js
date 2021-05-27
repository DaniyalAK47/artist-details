import "./App.css";
import Header from "./Pages/Header/Header";
import Landing from "./Pages/Landing/Landing";
import ArtistDetail from "./Pages/ArtistDetail/ArtistDetail";
import ArtistEvents from "./Pages/ArtistEvents/ArtistEvents";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <ArtistDetail />
      <ArtistEvents />
    </div>
  );
}

export default connect()(App);
