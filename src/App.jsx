import { Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PlayerProfile from './components/PlayerProfile';
import Leaderboards from './components/Leaderboards';
import NavBar from './components/NavBar';
import GuildsArray from './components/GuildsArray';
import GuildPage from './components/guildPage/GuildPage';
import SearchPage from './components/searchPage/SearchPage';
import PJArray from './components/PJArray';

import './App.css';
import Debugger from './components/Debugger';

const routes = [
  { path: '/', name: 'Leaderboards', Component: Leaderboards },
  {
    path: '/Player/:region/:realm/:name',
    name: 'PlayerProfile',
    Component: PlayerProfile,
  },
  {
    path: '/debugger',
    name: 'Debugger',
    Component: Debugger,
  },
  {
    path: '/Guild/:region/:realm/:name',
    name: 'GuildPage',
    Component: GuildPage,
  },
  {
    path: '/TopGuilds/:region/:realm/:faction',
    name: 'GuildsArray',
    Component: GuildsArray,
  },
  { path: '/Search', name: 'SearchPage', Component: SearchPage },
  {
    path: '/TopPlayers/:region/:class',
    name: 'PJArray',
    Component: PJArray,
  },
];

function App() {
  const location = useLocation();

  return (
    <div className="killPadding App d-flex flex-column container-fluid">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} location={location}>
            <Component />
          </Route>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
