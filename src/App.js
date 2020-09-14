import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { HomePage } from "./components/HomePage";
import { ResultPage } from "./components/ResultPage";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/result" component={ResultPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
