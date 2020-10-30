import './App.css';
// import GuildPage from './components/guildPage';
import PlayerProfile from './components/PlayerProfile';
// import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <GuildPage /> */}
      <PlayerProfile />
      {/* <Leaderboards /> */}
    </div>
  );
}

export default App;
