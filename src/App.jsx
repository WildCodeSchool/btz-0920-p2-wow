import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';
import GuildPage from './components/guildPage/GuildPage';
import SearchPage from './components/searchPage/SearchPage';
import PJArray from './components/PJArray';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Leaderboards} />
          <Route
            path="/player/:name/:region/:realm"
            component={PlayerProfile}
          />
          <Route path="/guild/:region/:realm/:name" component={GuildPage} />
          <Route path="/GuildsArray" component={GuildsArray} />
          <Route path="/search" component={SearchPage} />
          <Route path="/PJArray" component={PJArray} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
