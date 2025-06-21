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
        color: 'white',
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
      {/* לוגו גדול יותר */}
      <Box
        component="img"
        src="/images/logo-adi-sites.png"
        alt="Adi Sites Logo"
        sx={{
          width: 100,      
          height: 100,     
              ml: -4, 

          objectFit: 'contain',
        }}
      />

    
    </Box>
  );
};

export default Header;
