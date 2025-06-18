import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Container, Box, CssBaseline, Fab } from '@mui/material';
import NavMenu from '../NavMenu/NavMenu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ScrollToTopButton from '../../Utils/ScrollToTopButton/ScrollToTopButton';
import { Home } from '../../Home/Home';
import Footer from '../Footer/Footer';

function Layout(): JSX.Element {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <CssBaseline />
      
    {/* Mandala watermark fixed in background */}
<Box
  component="img"
  src="/images/mandala-logo.png"
  alt="Mandala Background"
  sx={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-52.5%, -50%)',
    maxWidth: '80vw',
    maxHeight: '80vh',
    opacity: 0.1, 
    zIndex: -9999,
    pointerEvents: 'none',
  }}
/>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'space-between',
        }}
      >
        {/* Sticky top navigation */}
        <Box
          component="nav"
          position="sticky"
          sx={{
            width: '100%',
            top: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <NavMenu />
        </Box>

        {/* Main content */}
        <Home />

        {/* Footer */}
        <Footer />
{/* Waze Floating Button */}
<Fab
  href="https://waze.com/ul?q=הרקפת%205%20אשקלון"
  target="_blank"
  aria-label="Waze"
  sx={{
    position: 'fixed',
    bottom: 156, // מרווח מעל הטלפון
    left: 16,
    zIndex: (theme) => theme.zIndex.drawer + 2,
    backgroundColor: '#2D89EF', // כחול בהיר
    '&:hover': {
      backgroundColor: '#1B5EAB', // כחול כהה יותר
    },
  }}
>
  <LocationOnIcon sx={{ fontSize: 28, color: '#ffffff' }} />
</Fab>

        {/* WhatsApp Floating Button */}
        <Fab
          href="https://wa.me/972506660706?text=היי%20גלית,%20אשמח%20לשמוע%20עוד%20פרטים%20על%20השיעורים%20שלך%20בבקשה"
          target="_blank"
          aria-label="WhatsApp"
          sx={{
            position: 'fixed',
            bottom: 24,
            left: 16,
            zIndex: (theme) => theme.zIndex.drawer + 2,
              backgroundColor: '#25D366', // ירוק WhatsApp
    '&:hover': {
      backgroundColor: '#128C7E', // ירוק כהה יותר (כמו באפליקציה)
    },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30, color: '#ffffff' }} /> {/* לבן */}
        </Fab>

        {/* Phone Call Floating Button */}
        <Fab
  href="tel:0506660706"
  aria-label="Call"
  sx={{
    position: 'fixed',
    bottom: 90,
    left: 16,
    zIndex: (theme) => theme.zIndex.drawer + 2,
    backgroundColor: '#1976d2', // MUI primary blue
    '&:hover': {
      backgroundColor: '#115293', // Darker blue
    },
  }}
>
  <PhoneIcon sx={{ fontSize: 28, color: '#ffffff' }} /> {/* White icon */}
</Fab>

      </Box>
      <ScrollToTopButton />
    </Container>
  );
}

export default Layout;
