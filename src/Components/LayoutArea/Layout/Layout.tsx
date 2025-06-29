import { useState } from 'react';
import { Container, Box, CssBaseline, Fab, Tooltip, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../../Utils/ScrollToTopButton/ScrollToTopButton';
import { Home } from '../../Home/Home';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import { ContactPopup } from '../../PagesArea/ContactPopup/ContactPopup';

interface LayoutProps {
  toggleMode: () => void;
}

function Layout({ toggleMode }: LayoutProps): JSX.Element {
  const [introDone, setIntroDone] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://www.adisite.co.il');
      alert('הקישור הועתק!');
    } catch (err) {
      console.error('העתקת קישור נכשלה:', err);
    }
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: 'transparent !important' }}
    >
      <CssBaseline />

      {/* רקע חלקיקים */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,
          pointerEvents: 'none',
        }}
      >
        <ParticlesBackground />
      </Box>

      {/* נאבבר */}
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

      {/* פוטר */}
      {introDone && <Footer />}

      {/* כפתורי פעולה */}
      {introDone && (
        <Box>
          {/* וואטסאפ */}
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

          {/* טלפון */}
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

          {/* שיתוף לוואטסאפ */}
          <Fab
            href={`https://wa.me/?text=${encodeURIComponent('תראה איזה אתר מהמם מצאתי: https://www.adisite.co.il')}`}
            target="_blank"
            aria-label="Share"
            sx={{
              position: 'fixed',
              bottom: 156,
              left: 16,
              zIndex: (theme) => theme.zIndex.drawer + 2,
              backgroundColor: '#00BFA5',
              '&:hover': { backgroundColor: '#008e76' },
            }}
          >
            <ShareIcon sx={{ fontSize: 26, color: '#fff' }} />
          </Fab>

          {/* העתק קישור */}
          <Tooltip title="העתק קישור">
            <IconButton
              onClick={handleCopyLink}
              sx={{
                position: 'fixed',
                bottom: 222,
                left: 16,
                zIndex: (theme) => theme.zIndex.drawer + 2,
                backgroundColor: '#555',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {/* טופס קופץ */}
      <ContactPopup />

      <ScrollToTopButton />
    </Container>
  );
}

export default Layout;
