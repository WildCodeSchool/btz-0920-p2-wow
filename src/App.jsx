import './App.css';
//  import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';

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
      <GuildsArray />
      {/* <Leaderboards /> */}
    </div>
  );
}

export default App;
