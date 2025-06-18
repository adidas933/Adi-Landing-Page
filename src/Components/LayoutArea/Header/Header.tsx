// Header.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <Box
      onClick={handleClick}
      aria-label="Navigate to homepage"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        color: 'white',
        textDecoration: 'none',
        marginRight: 'auto',
        px: 1,
        py: 0.5,
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        '&:hover': {
          backgroundColor: 'transparent',
          transform: 'scale(1.02)',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          whiteSpace: 'nowrap',
          fontWeight: 600,
          fontSize: '1.25rem',
          color: 'white',
        }}
      >
        יוגה ברקפת
      </Typography>

      <Box
        component="img"
        src="/images/yoga-logo.png"
        alt="Yoga Logo"
        sx={{
          width: 40,
          height: 40,
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default Header;
