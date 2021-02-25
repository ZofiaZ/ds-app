import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import PreviewProfile from "./pages/PreviewProfile";
import MainHeader from "./layout/MainHeader";
import MainFooter from "./layout/MainFooter";
// import { saveProfileDataInSessionStorage } from "./utils/sessionStorage";
import { getProfileData } from "./utils/api";
import { IProfileData } from "./types";

const containerStyles = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
};

function App() {
  const [data, setData] = useState<IProfileData>();

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileData();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <Router>
      <MainHeader />

      <main className="App-content" style={containerStyles}>
        <Switch>
          <Route exact path="/">
            <PreviewProfile data={data} />
          </Route>
          <Route path="/edit">
            <EditProfile data={data} setData={setData} />
          </Route>
        </Switch>
      </main>

      <MainFooter />
    </Router>
  );
}

export default App;
