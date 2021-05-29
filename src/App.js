import "./App.css";
import Index from "./Pages/index";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default connect()(App);
