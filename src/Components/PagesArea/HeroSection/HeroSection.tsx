import { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-scroll';

interface HeroSectionProps {
  onIntroDone?: () => void;
}

export function HeroSection({ onIntroDone }: HeroSectionProps): JSX.Element {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [videoSrc, setVideoSrc] = useState(
    '/animations/logo-animation-laptop.mp4'
  );
  const [introVisible, setIntroVisible] = useState(true);
  const [introDone, setIntroDone] = useState(false);

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
      setIntroVisible(false);
      setTimeout(() => {
        setIntroDone(true);
        onIntroDone?.();
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
        px: 0,
        bgcolor: 'transparent',
      }}
    >
      {/* וידאו פתיחה */}
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

      {/* עיצוב שונה למובייל ודסקטופ */}
      {introDone && (
        <>
          {/* מובייל – תצוגה אנכית */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              component="img"
              src="/images/adi-hero.jpg"
              alt="Adi"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                zIndex: 0,
                filter: 'grayscale(30%) brightness(0.85)',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: '4%', // נמוך יותר
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                textAlign: 'center',
                px: 3,
                py: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                borderRadius: 4,
                backdropFilter: 'blur(5px)',
                maxWidth: '90vw', // טיפה יותר רחב
                width: '90%',
              }}
            >
              <Typography
                variant="h5"
                color="white"
                sx={{
                  fontWeight: 300,
                  fontSize: '1.7rem',
                  lineHeight: 1.6,
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                אתרים ודפי נחיתה שנראים טוב
                <br />
                ומביאים תוצאות אמיתיות
              </Typography>

              <Link to="contact" smooth duration={500} offset={-56}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 'bold',
                  }}
                >
                  דברו איתי
                </Button>
              </Link>
            </Box>
          </Box>

          {/* דסקטופ – מבנה דו-צדדי */}
          <Grid
            container
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: '100%',
            }}
          >
            {/* תמונה בצד שמאל */}
            <Grid item md={6}>
              <Box
                component="img"
                src="/images/adi-hero.jpg"
                alt="Adi"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                  filter: 'grayscale(30%) brightness(0.85)',
                }}
              />
            </Grid>

            {/* טקסט בצד ימין – ממורכז אנכית */}
            <Grid
              item
              md={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 8,
                mt: -25,
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    fontWeight: 300,
                    fontSize: '2rem',
                    lineHeight: 1.6,
                    maxWidth: 550,
                    mb: 3,
                  }}
                >
                  אתרים ודפי נחיתה שנראים טוב
                  <br />
                  ומביאים תוצאות אמיתיות
                </Typography>

                <Link to="contact" smooth duration={500} offset={-56}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    דברו איתי
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
