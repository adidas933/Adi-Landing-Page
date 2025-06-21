import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  Drawer,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from 'react';
import { mainMenu } from '../../Utils/Variables/Variables';
import Header from '../Header/Header';
import DrawerMenu from './DrawerMenu';
import { Link as ScrollLink } from 'react-scroll';

interface NavMenuProps {
  toggleMode: () => void;
}

export default function NavMenu({ toggleMode }: NavMenuProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Box position="sticky">
      <AppBar
        color="primary"
        elevation={0}
        sx={{
          height: 56,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Header />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* כפתור מצב כהה/בהיר */}
            <IconButton
              onClick={toggleMode}
              color="inherit"
              aria-label="toggle dark mode"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              <Brightness4Icon />
            </IconButton>

            {/* תפריט ניווט למסכים גדולים */}
            {!isMobile && (
<Box sx={{ display: 'flex', gap: 1, flexDirection: 'row-reverse' }}>
                {mainMenu.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy
                    smooth
                    duration={500}
                    offset={-56}
                  >
                    <Button color="inherit">{item.label}</Button>
                  </ScrollLink>
                ))}
              </Box>
            )}

            {/* אייקון תפריט רק במובייל */}
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

      {/* תפריט צד נפתח במובייל */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            zIndex: (theme) => theme.zIndex.drawer + 10,
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
