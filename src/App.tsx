import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "components/Nav";
import StandardPlaceholder from "components/StandardPlaceholder";

function App() {
  return (
    <div className="App">
      {/* <img src="images/nav.png" alt="navigation" />
      <img src="images/LandingScreen.png" alt="navigation" /> */}
      <StandardPlaceholder src="images/nav.png" link="#" />
      <StandardPlaceholder src="images/LandingScreen.png" link="#" />
      <StandardPlaceholder src="images/PivitalContent.png" link="#" />
    </div>
  );
}

export default App;
