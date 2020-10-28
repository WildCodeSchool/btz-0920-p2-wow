import React from 'react';
import './App.css';
import PlayerProfile from './components/PlayerProfile';
// import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayerProfile />
        {/* <Leaderboards /> */}
      </div>
    );
  }
}

export default App;
