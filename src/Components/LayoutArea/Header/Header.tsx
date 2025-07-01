import React from 'react';
import { Box } from '@mui/material';
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
      aria-label="חזרה לדף הבית"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: 'primary.contrastText',
        textDecoration: 'none',
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


      <Box
        component="img"
        src="/images/header-logo.png"
        alt="Adi Sites Logo"
        sx={{
          width: { xs: 80, sm: 90, md: 100 },
          height: 'auto',
          ml: { xs: -2, sm: -3, md: -4 },
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default Header;
