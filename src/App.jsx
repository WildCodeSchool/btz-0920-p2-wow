import './App.css';
import { Container } from 'reactstrap';
import SearchPage from './components/searchPage/SearchPage';
import SearchRegionPage from './components/searchPage/searchRegionPage';
import SearchServerPage from './components/searchPage/searchServerPage';
import SearchFactionPage from './components/searchPage/searchFactionPage';

function App() {
  return (
    <Container className="App" style={{ width: '100vw' }}>
      <SearchPage />
      <SearchRegionPage />
      <SearchServerPage />
      <SearchFactionPage />
    </Container>
  );
}

export default App;
