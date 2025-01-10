import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./components/pages/index";
import SocialLinks from "./components/common/SocialLinks";

function App() {
  return (
    <BrowserRouter>
      {routes.map((data, idx) => (
        <Route
          exact
          path={data.path}
          component={data.component}
          key={idx}
        ></Route>
      ))}
      <SocialLinks />

    </BrowserRouter>
  );
}

export default App;
