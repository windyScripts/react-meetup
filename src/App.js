import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
