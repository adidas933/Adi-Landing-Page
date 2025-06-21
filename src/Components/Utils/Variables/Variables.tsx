// Variables.ts

import { createTheme } from '@mui/material/styles';

export const studioAddress = 'הרקפת 5 אשקלון';

export const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(studioAddress)}`;
export const wazeLink = `https://www.waze.com/ul?q=${encodeURIComponent(studioAddress)}`;

export const mainMenu = [
  { label: 'ראשי', to: 'hero' },
  { label: 'מה אני מציע', to: 'services' },
  { label: 'לקוחות מספרים', to: 'testimonials' },
  { label: 'צור קשר', to: 'contact' },
];

export function getTheme(mode: 'light' | 'dark') {
  const isDark = mode === 'dark';

  return createTheme({
    direction: 'rtl',
    palette: {
      mode,
      primary: {
        main: '#283593',
        dark: '#1a237e',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffca28',
        contrastText: '#1a237e',
      },
      background: {
  default: 'transparent',
        // default: isDark ? '#121212' : '#f3f4f6',
        paper: isDark ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#212121',
        secondary: isDark ? '#cfcfcf' : '#616161',
      },
    },
    typography: {
      fontFamily: 'Heebo, Assistant, Arial, sans-serif',
      button: {
        fontWeight: 'bold',
        fontSize: '1rem',
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontWeight: 'bold',
            fontSize: '1rem',
            textTransform: 'none',
            boxShadow: 'none',
          },
          containedPrimary: {
            backgroundColor: '#283593',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1a237e',
            },
          },
          containedSecondary: {
            backgroundColor: '#ffca28',
            color: '#1a237e',
            '&:hover': {
              backgroundColor: '#fbc02d',
            },
          },
          outlinedPrimary: {
            border: '2px solid #283593',
            color: '#283593',
            '&:hover': {
              backgroundColor: '#e8eaf6',
            },
          },
        },
      },
    },
  });
}
