import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { fakeNames } from "./component/fakeNames";
import { FilterList } from "./component/FilterList";

import Listing from "./component/Listing";
export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/listing">listing</Link>
            </li>
          </ul>
        </nav>

        <header className="App-header">
          <Switch>
            <Route path="/listing">
              <Listing />
            </Route>
            <Route path="/">
              <FilterList names={fakeNames} />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}
