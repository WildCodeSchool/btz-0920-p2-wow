import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';
import GuildPage from './components/guildPage/GuildPage';
import SearchPage from './components/searchPage/SearchPage';
import PJArray from './components/PJArray';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Leaderboards} />
          <Route
            path="/PlayerProfile/:name/:region/:realm"
            component={PlayerProfile}
          />
          <Route path="/GuildPage/:name/:region/:realm" component={GuildPage} />
          <Route path="/GuildsArray" component={GuildsArray} />
          <Route path="/SearchPage" component={SearchPage} />
          <Route path="/PJArray" component={PJArray} />
          {/* <PlayerProfile /> */}
          {/* <GuildsArray /> */}
          {/* <Leaderboards /> */}
          {/* <SearchPage /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
