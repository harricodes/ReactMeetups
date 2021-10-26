import { Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import MainNavigation from './components/layouts/MainNavigation';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetups">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
