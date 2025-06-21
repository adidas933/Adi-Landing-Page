import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { theme } from './Components/Utils/Variables/Variables';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0, overflowX: 'hidden' },
          body: { margin: 0, padding: 0, overflowX: 'hidden' },
          '#root': { margin: 0, padding: 0, overflowX: 'hidden' },
        }}
      />
      <Layout />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
