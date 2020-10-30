import './App.css';
// import GuildPage from './components/guildPage';
import PlayerProfile from './components/PlayerProfile';
// import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';
import Leaderboards from './components/Leaderboards';
// import GuildPage from './components/guildPage';
// import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
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
      <PlayerProfile />
      <GuildsArray />
      {/* <GuildPage /> */}
      <Leaderboards />
      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
