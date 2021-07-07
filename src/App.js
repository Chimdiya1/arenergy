import "./App.css";
import { Switch, Route } from "react-router-dom";

import AlphaPage from "./alpha/components/page";
import GammaPage from "./gamma/components/page";
import ProfilePage from "./alpha/components/page/profile";
import CompetitionPage from "./gamma/components/page/competition";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/alpha" component={AlphaPage} />
        <Route exact path="/alpha/:id" component={ProfilePage} />
        <Route exact path="/gamma" component={GammaPage} />
        <Route exact path="/gamma/:id" component={CompetitionPage} />
      </Switch>
    </div>
  );
}

export default App;
