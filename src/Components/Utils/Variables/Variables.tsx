// Variables.ts
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
      main: '#283593', // כחול עמוק יותר
      dark: '#1a237e', // כהה להובר
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffca28', // צהוב חמים
      contrastText: '#1a237e',
    },
    background: {
      default: '#f3f4f6', // רקע אפור-כחלחל בהיר
      paper: '#ffffff',   // כרטיסים ולבנים
    },
    text: {
      primary: '#212121', // כמעט שחור
      secondary: '#616161', // אפור ביניים
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
