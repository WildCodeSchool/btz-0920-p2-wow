import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/guildsArray/GuildsArray';
import GuildPage from './components/guildPage/GuildPage';
import SearchPage from './components/searchPage/SearchPage';
import PJArray from './components/pjArray/PJArray';

import './App.css';

const routes = [
  { path: '/', name: 'Leaderboards', Component: Leaderboards },
  {
    path: '/player/:region/:realm/:name',
    name: 'PlayerProfile',
    Component: PlayerProfile,
  },
  {
    path: '/guild/:region/:realm/:name',
    name: 'GuildPage',
    Component: GuildPage,
  },
  {
    path: '/GuildsArray/:region/:realm',
    name: 'GuildsArray',
    Component: GuildsArray,
  },
  { path: '/search', name: 'SearchPage', Component: SearchPage },
  {
    path: '/PJArray/:region/:class',
    name: 'PJArray',
    Component: PJArray,
  },
];

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column container-fluid">
        <NavBar />
        <>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                >
                  <div>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </>
      </div>
    </Router>
  );
}

export default App;
