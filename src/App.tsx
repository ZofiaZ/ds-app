import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import PreviewProfile from "./pages/PreviewProfile";
import MainHeader from "./layout/MainHeader";
import MainFooter from "./layout/MainFooter";

const containerStyles = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
};

function App() {
  return (
    <Router>
      <MainHeader />

      <main className="App-content" style={containerStyles}>
        <Switch>
          <Route exact path="/">
            <PreviewProfile />
          </Route>
          <Route path="/edit">
            <EditProfile />
          </Route>
        </Switch>
      </main>

      <MainFooter />
    </Router>
  );
}

export default App;
