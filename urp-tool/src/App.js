import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProjects from "./Screens/AddProjects"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={AddProjects} />

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;