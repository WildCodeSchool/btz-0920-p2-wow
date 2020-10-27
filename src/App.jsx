import './App.css';
import { Container } from 'reactstrap';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <Container className="App" style={{ width: '100vw' }}>
      <SearchPage />
    </Container>
  );
}

export default App;
