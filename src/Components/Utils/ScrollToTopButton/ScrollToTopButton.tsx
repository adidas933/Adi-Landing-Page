import { useEffect, useState } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollToTopButtonProps {
  position?: 'left' | 'right';
}

function ScrollToTopButton({ position = 'right' }: ScrollToTopButtonProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        aria-label="עלייה לראש הדף"
        sx={{
          position: 'fixed',
          bottom: 32,
          [position]: 32,
          zIndex: theme.zIndex.tooltip + 1,
          backgroundColor: '#0289d1c1',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0277bd',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;
