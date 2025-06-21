import { createTheme } from '@mui/material';

export const studioAddress = 'הרקפת 5 אשקלון';

export const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
  studioAddress
)}`;

export const wazeLink = `https://www.waze.com/ul?q=${encodeURIComponent(
  studioAddress
)}`;

export const mainMenu = [
  { label: 'ראשי', to: 'hero' },
  { label: 'מה אני מציע', to: 'services' },
  { label: 'לקוחות מספרים', to: 'testimonials' },
  { label: 'צור קשר', to: 'contact' },
];

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#203a43', // dark blue
      contrastText: '#fff', // white text
    },
    background: {
      default: '#bfdeff',
      paper: '#bfdeff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4f4f4f',
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
    button: {
      fontWeight: 'bold',
      fontSize: '0.95rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#203a43',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#0f2027',
          },
        },
        // optionally, you can add variants if you want outlined/secondary differently
        containedSecondary: {
          backgroundColor: '#203a43',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0f2027',
          },
        },
      },
    },
  },
});
