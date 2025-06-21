import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

export function HeroSection(): JSX.Element {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [videoSrc, setVideoSrc] = useState('/animations/logo-animation-laptop.mp4');
  const [introVisible, setIntroVisible] = useState(true); // עבור fade
  const [introDone, setIntroDone] = useState(false);      // כדי להסתיר לגמרי

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(`${window.innerHeight}px`);
      const isPhone = window.innerWidth <= 768;
      setVideoSrc(
        isPhone
          ? '/animations/logo-animation-phone.mp4'
          : '/animations/logo-animation-laptop.mp4'
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false); // מתחיל fade
      setTimeout(() => setIntroDone(true), 1000); // אחרי fade – מסתיר
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: viewportHeight,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      {/* ווידאו עם fade-out */}
      {!introDone && (
        <Box
          component="video"
          src={videoSrc}
          autoPlay
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: { xs: 'contain', sm: 'cover' },
            zIndex: 1,
            opacity: introVisible ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      )}

      {/* תוכן קבוע – ייחשף מתחת לוידאו ברגע שיתבצע fade */}
      {introDone && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '90%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 4, sm: 6 },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
            }}
          >
            Adi Sites
          </Typography>

          <Typography
            variant="h6"
            color="gray"
            sx={{
              mt: 2,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              maxWidth: 500,
              lineHeight: 1.5,
            }}
          >
            אתרים ודפי נחיתה שנראים טוב<br />ומביאים תוצאות
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            דברו איתי
          </Button>
        </Box>
      )}
    </Box>
  );
}
