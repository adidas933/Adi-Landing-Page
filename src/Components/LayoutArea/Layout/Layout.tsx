import { useState } from 'react';
import { Container, Box, CssBaseline, Fab, Fade } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../../Utils/ScrollToTopButton/ScrollToTopButton';
import { Home } from '../../Home/Home';

function Layout(): JSX.Element {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Container component="main" maxWidth={false} disableGutters>
      <CssBaseline />

      {/* רקע קבוע */}
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
        {/* תפריט ניווט – עם מעבר חלק */}
        <Fade in={introDone} timeout={1000}>
          <Box
            component="nav"
            position="sticky"
            sx={{
              width: '100%',
              top: 0,
              zIndex: (theme) => theme.zIndex.drawer + 1,
              display: introDone ? 'block' : 'none',
            }}
          >
            <NavMenu />
          </Box>
        </Fade>

        {/* קומפוננטת Home מקבלת פקודה להודיע מתי האנימציה הסתיימה */}
        <Home onIntroDone={() => setIntroDone(true)} />

        {/* Footer עם fade */}
        <Fade in={introDone} timeout={1000}>
          <Box sx={{ display: introDone ? 'block' : 'none' }}>
            <Footer />
          </Box>
        </Fade>

        {/* כפתורי וואטסאפ וטלפון – עם מעבר חלק */}
        <Fade in={introDone} timeout={1000}>
          <Box>
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
                '&:hover': { backgroundColor: '#128C7E' },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 30, color: '#fff' }} />
            </Fab>

            <Fab
              href="tel:0503877326"
              aria-label="Call"
              sx={{
                position: 'fixed',
                bottom: 90,
                left: 16,
                zIndex: (theme) => theme.zIndex.drawer + 2,
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#115293' },
              }}
            >
              <PhoneIcon sx={{ fontSize: 28, color: '#fff' }} />
            </Fab>
          </Box>
        </Fade>
      </Box>

      <ScrollToTopButton />
    </Container>
  );
}

export default Layout;
