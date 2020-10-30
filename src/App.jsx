import './App.css';

import NavBar from './components/NavBar';
// import Leaderboards from './components/Leaderboards';
// import GuildPage from './components/guildPage';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavBar />
      {/* <Leaderboards /> */}
      {/* <GuildPage /> */}
      <SearchPage />
    </div>
  );
}

export default App;
