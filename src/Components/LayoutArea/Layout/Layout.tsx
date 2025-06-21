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

      {/* Optional background graphic (replace or remove) */}
       <Box
        component="img"
        src="/images/mandala-logo.png"
        alt="Background Graphic"
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-52.5%, -50%)',
          maxWidth: '80vw',
          maxHeight: '80vh',
          opacity: 0.05,
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
        {/* Navigation bar */}
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

        {/* WhatsApp Floating Button */}
        <Fab
          href="https://wa.me/972503877326?text=היי%20עדי,%20ראיתי%20את%20האתר%20שלך%20ומעניין%20אותי%20לקבל%20פרטים%20על%20בניית%20אתר%20או%20דף%20נחיתה"
          target="_blank"
          aria-label="WhatsApp"
          sx={{
            position: 'fixed',
            bottom: 24,
            left: 16,
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: '#25D366',
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30, color: '#ffffff' }} />
        </Fab>

        {/* Phone Call Floating Button */}
        <Fab
          href="tel:0503877326"
          aria-label="Call"
          sx={{
            position: 'fixed',
            bottom: 90,
            left: 16,
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#115293',
            },
          }}
        >
          <PhoneIcon sx={{ fontSize: 28, color: '#ffffff' }} />
        </Fab>
      </Box>

      <ScrollToTopButton />
    </Container>
  );
}

export default Layout;
