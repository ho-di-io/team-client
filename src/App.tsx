import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
