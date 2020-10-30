import './App.css';
import SearchPage from './components/searchPage/SearchPage';
import GuildPage from './components/guildPage';
// import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <SearchPage />
      <NavBar />
      <GuildPage />
      {/* <Leaderboards /> */}
    </div>
  );
}

export default App;
