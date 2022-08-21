import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScreenGender from "./ScreenGender";
import ScreenHome from "./ScreenHome";
import ScreenResult from "./ScreenResult";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import name from "./reducers/name";
import age from "./reducers/age";

const store = createStore(combineReducers({ name, age }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route path="/gender" component={ScreenGender} />
          <Route path="/result" component={ScreenResult} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
