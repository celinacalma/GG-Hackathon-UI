import React from "react";
import 'bootswatch/dist/minty/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route, Redirect, 
} from 'react-router-dom';
import NotFoundPage from "./components/notfound/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/languages" component={LanguagesPage} />
        <Route exact path="/submit" component={SubmissionsPage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
