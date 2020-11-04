import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

import 'bootswatch/dist/superhero/bootstrap.min.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
