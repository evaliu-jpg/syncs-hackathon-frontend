import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Landing from "./Views/Landing";
import Main from "./Views/Main";

const App = () => {
  const [username, setUsername] = useState(null);

  const modifyUsername = (val) => {
    setUsername(val);
  };

  return (
    <main>
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Landing
              {...props}
              modifyUsername={modifyUsername}
              username={username}
            />
          )}
          exact
        />
        <Route
          path="/chat"
          render={(props) => <Main {...props} username={username} />}
        />
      </Switch>
    </main>
  );
};

export default App;
