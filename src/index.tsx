// index.tsx או main.tsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import Layout from './Components/LayoutArea/Layout/Layout';
import { getTheme } from './Components/Utils/Variables/Variables';

// ייבוא tsparticles
import { loadAll } from '@tsparticles/all';
import { tsParticles } from '@tsparticles/engine';

// טוען פעם אחת את כל הפיצ'רים
loadAll(tsParticles);

function AppWrapper() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0, overflowX: 'hidden' },
          body: {
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
          },
          '#root': { margin: 0, padding: 0, overflowX: 'hidden' },
        }}
      />
      <Layout toggleMode={toggleMode} />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);
