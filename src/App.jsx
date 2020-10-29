import './App.css';
import GuildPage from './components/guildPage';
// import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GuildPage />
      {/* <Leaderboards /> */}
    </div>
  );
}

export default App;
