import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from "./Screens/MainPage";
import ProjectsPage from "./Screens/ProjectsPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;