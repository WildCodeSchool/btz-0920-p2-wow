import './App.css';
// eslint-disable-next-line import/no-named-as-default-member
import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <PlayerProfile />
      <NavBar />
      <Leaderboards />
    </div>
  );
}

export default App;
