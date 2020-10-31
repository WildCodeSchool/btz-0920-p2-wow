import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import GuildPage from './components/guildPage';
import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';
import GuildPage from './components/guildPage';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          fontFamily: 'Ubuntu',
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '55px',
          letterSpacing: '0em',
          textAlign: 'center',
        }}
      >
        <NavBar />
        <Switch>
          <Route path="/" exact component={Leaderboards} />
          <Route path="/PlayerProfile" component={PlayerProfile} />
          <Route path="/GuildsArray" component={GuildsArray} />
          <Route path="/GuildPage" component={GuildPage} />
          <Route path="/SearchPage" component={SearchPage} />
          {/* <PlayerProfile /> */}
          {/* <GuildsArray /> */}
          {/* <GuildPage /> */}
          {/* <Leaderboards /> */}
          {/* <SearchPage /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
