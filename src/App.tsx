import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import PreviewProfile from "./pages/PreviewProfile";
import MainHeader from "./layout/MainHeader";
import MainFooter from "./layout/MainFooter";

function App() {
  return (
    <Router>
      <MainHeader />

      <Switch>
        <Route exact path="/">
          <PreviewProfile />
        </Route>
        <Route path="/edit">
          <EditProfile />
        </Route>
      </Switch>

      <MainFooter />
    </Router>
  );
}

export default App;
