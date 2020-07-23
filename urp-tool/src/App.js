import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsPage from "./Screens/ProjectsPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ProjectsPage} />

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;