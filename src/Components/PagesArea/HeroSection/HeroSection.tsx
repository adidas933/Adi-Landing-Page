import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

interface HeroSectionProps {
  onIntroDone?: () => void;
}

export function HeroSection({ onIntroDone }: HeroSectionProps): JSX.Element {
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
      setTimeout(() => {
        setIntroDone(true); // אחרי fade – מסתיר
        onIntroDone?.(); // קורא לפונקציה אם סופקה
      }, 1000);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onIntroDone]);

  return (
    <Box
  sx={{
    width: '100vw',
    height: viewportHeight,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 2,

    // כאן תבחר רקע – שקוף או מדורג:
bgcolor: 'transparent' ,// אם כבר יש canvas מתחת ברמת ה-Layout

    transition: 'background 1s ease',
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
            transform: {
              xs: 'scale(1)',
              sm: 'scale(1)',
              md: 'scale(0.8)',
              lg: 'scale(0.75)',
            },
            zIndex: 1,
            opacity: introVisible ? 1 : 0,
            transition: 'opacity 1s ease, transform 0.4s ease-in-out',
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
    px: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderRadius: 4,
    backdropFilter: 'blur(5px)',
  }}
>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{
              fontSize: { xs: '2.5rem', sm: '2.7rem', md: '3.2rem' },
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
              fontSize: { xs: '1.5rem', sm: '1.6rem', md: '1.7rem' },
              maxWidth: 500,
              lineHeight: 1.5,
            }}
          >
            אתרים ודפי נחיתה שנראים טוב<br />ומביאים תוצאות
          </Typography>

      <Link
  to="contact"
  smooth={true}
  duration={500}
  offset={-56} // לפי גובה ה-Navbar שלך
>
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
</Link>
        </Box>
      )}
    </Box>
  );
}
