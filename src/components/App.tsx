import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import PreviewProfile from "./pages/PreviewProfile";
import MainHeader from "./layout/MainHeader";
import MainFooter from "./layout/MainFooter";
import { getProfileData } from "../utils/api";
import { IProfileData } from "../types";
import styled from "styled-components";
import { layout, spacings } from "../utils/styles";
import { getStoredValue } from "../utils/sessionStorage";

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: ${spacings.offset};
  min-height: calc(100vh - ${layout.headerHeight} - ${layout.footerHeight});
  box-sizing: border-box;
`;

function App() {
  const [data, setData] = useState<IProfileData>();

  useEffect(() => {
    async function fetchData() {
      const userId = getStoredValue("userId");
      const data = await getProfileData();
      setData({ ...data, userId: userId });
    }

    fetchData();
  }, []);

  return (
    <Router>
      <MainHeader />

      <Main>
        <Switch>
          <Route exact path="/">
            <PreviewProfile data={data} />
          </Route>
          <Route path="/edit">
            <EditProfile data={data} setData={setData} />
          </Route>
        </Switch>
      </Main>

      <MainFooter />
    </Router>
  );
}

export default App;
