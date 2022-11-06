/* eslint-disable no-new */
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import HttpAxios from './http/httpAxios';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import theme from './styles/Themes';
import './assets/fonts/index.css';
import AdListDataService from './service/AdListDataService';
import { MadupProvider } from './context/MadupContext';
import TokenRepository from './repository/tokenRepository';

const tokenRepository = new TokenRepository();

const httpClient = new HttpAxios(process.env.REACT_APP_BASE_URL, tokenRepository);
const madupService = new AdListDataService(httpClient);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <MadupProvider madupService={madupService}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </MadupProvider>
  </ThemeProvider>
);
