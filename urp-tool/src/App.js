import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from "./Screens/AdminPage"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={AdminPage} />

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;