import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Header from '../Header/Header';
import DrawerMenu from './DrawerMenu';
import { Link } from 'react-scroll';
import { mainMenu } from '../../Utils/Variables/Variables';

function NavMenu(): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
  position="fixed"
  sx={{
    background: 'linear-gradient(to right, #5d2a00, #f58120)', // כהה יותר לקונטרסט
    width: '100%',
    zIndex: (theme) => theme.zIndex.drawer + 1,
    top: 0,
  }}
>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Header />

    {/* Desktop Menu */}
<Box
  sx={{
    display: { xs: 'none', lg: 'flex' },
    gap: 3,
    flexDirection: 'row-reverse', // הופך את הסדר מימין לשמאל
  }}
>      {mainMenu.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          style={{ textDecoration: 'none' }}
        >
          <Button
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: '25px',
              textTransform: 'none',
              px: 2.5,
              backgroundColor: 'rgba(255,255,255,0.1)', // כהה ועדין
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#5d2a00', // חום כהה (טקסט בהובר)
              },
            }}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </Box>

    {/* Mobile Menu Icon */}
    <IconButton
      edge="end"
      aria-label="menu"
      sx={{
        display: { xs: 'block', lg: 'none' },
        padding: '6px',
        border: '2px solid #ffffff',
        borderRadius: '10%',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
      }}
      onClick={() => setDrawerOpen(!drawerOpen)}
    >
      <MenuIcon />
    </IconButton>

    {/* Mobile Drawer */}
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          direction: 'rtl',
          background: '#5d2a00',
          color: '#ffffff',
          width: 260,
          px: 2,
          pt: 3,
        },
      }}
    >
      <DrawerMenu items={mainMenu} onClose={() => setDrawerOpen(false)} />
    </Drawer>
  </Toolbar>
</AppBar>

  );
}

export default NavMenu;
