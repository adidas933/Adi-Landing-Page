// NavMenu.tsx
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from 'react';
import { mainMenu } from '../../Utils/Variables/Variables';
import Header from '../Header/Header';
import DrawerMenu from './DrawerMenu';

interface NavMenuProps {
  toggleMode: () => void;
}

export default function NavMenu({ toggleMode }: NavMenuProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box position={'sticky'}>
      <AppBar
        color="primary"
        elevation={0}
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar, // Lower than drawer
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Header />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={toggleMode}
              color="inherit"
              aria-label="toggle dark mode"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              <Brightness4Icon />
            </IconButton>

            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={toggleDrawer}
  PaperProps={{
    sx: {
      backgroundColor: theme.palette.primary.main,
      zIndex: (theme) => theme.zIndex.drawer + 10, // בטוח מעל AppBar
    },
  }}
>
        <DrawerMenu
          items={mainMenu}
          onClose={toggleDrawer}
          toggleMode={toggleMode}
        />
      </Drawer>
    </Box>
  );
}
