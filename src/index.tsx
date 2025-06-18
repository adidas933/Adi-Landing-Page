import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { theme } from './Components/Utils/Variables/Variables';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        'html, body, #root': { margin: 0, padding: 0,          overflowX: 'hidden',  // add this
 },
      
      }}
    />
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
