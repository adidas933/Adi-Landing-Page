import { useState } from 'react';
import { Container, Box, CssBaseline, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../../Utils/ScrollToTopButton/ScrollToTopButton';
import { Home } from '../../Home/Home';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';

interface LayoutProps {
  toggleMode: () => void;
}

function Layout({ toggleMode }: LayoutProps): JSX.Element {
  const [introDone, setIntroDone] = useState(false);

  return (
 <Container
  component="main"
  maxWidth={false}
  disableGutters
sx={{
  backgroundColor: 'transparent !important',
}}
>
      <CssBaseline />
<Box
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10, // תוודא שהוא נמוך יותר מכל שאר האלמנטים
    pointerEvents: 'none', // חשוב כדי לא לחסום אינטראקציות
  }}
>
  <ParticlesBackground />
</Box>

      {/* ✅ נאבבר תמיד מוצג ו־Sticky */}
    
{introDone && (
  <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: (theme) => theme.zIndex.appBar,
    }}
  >
    <NavMenu toggleMode={toggleMode} />
  </Box>
)}
      {/* תוכן עמוד הבית */}
      <Home onIntroDone={() => setIntroDone(true)} />

      {/* Footer */}
      {introDone && <Footer />}

      {/* כפתורי וואטסאפ וטלפון */}
      {introDone && (
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
      )}

      <ScrollToTopButton />
    </Container>
  );
}

export default Layout;
