// DrawerMenu.tsx
import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Stack,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-scroll';

interface MenuItemType {
  label: string;
  to?: string;
  children?: MenuItemType[];
}

interface DrawerMenuProps {
  items: MenuItemType[];
  onClose: () => void;
  toggleMode: () => void;
}

function DrawerMenu({ items, onClose, toggleMode }: DrawerMenuProps): JSX.Element {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleClick = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <Box
      sx={{
        width: 250,
        px: 2,
        pt: 4,
        maxWidth: '100%',
        overflowX: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        {/* לוגו */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Box
              component="img"
              src="/images/logo-Adi-Sites.png"
              alt="Adi Sites Logo"
              sx={{
                height: 100,
                width: 'auto',
                maxHeight: 100,
              }}
            />
          </Stack>
        </Box>

        {/* תפריט ראשי */}
        <List>
          {items.map((item) =>
            item.children ? (
              <Box key={item.label}>
                <ListItemButton
                  onClick={() => handleClick(item.label)}
                  sx={{
                    color: 'white',
                    borderRadius: '8px',
                    mb: 1,
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      color: 'white',
                    }}
                  />
                  {openItems[item.label] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openItems[item.label]} timeout="auto" unmountOnExit sx={{ pr: 2 }}>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to || ''}
                        smooth
                        duration={500}
                        offset={-80}
                        onClick={onClose}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            color: 'white',
                            borderRadius: '8px',
                            mb: 1,
                            textAlign: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              fontSize: '1.1rem',
                              fontWeight: 500,
                              textAlign: 'center',
                              color: 'white',
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <Link
                key={item.label}
                to={item.to || ''}
                smooth
                duration={500}
                offset={-80}
                onClick={onClose}
                style={{ textDecoration: 'none' }}
              >
                <ListItemButton
                  sx={{
                    color: 'white',
                    borderRadius: '8px',
                    mb: 1,
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      color: 'white',
                    }}
                  />
                </ListItemButton>
              </Link>
            )
          )}
        </List>
      </Box>

      {/* אזור תחתון אם תרצה להחזיר בו כפתור או תוכן נוסף בעתיד */}
      <Box sx={{ textAlign: 'center', py: 2 }} />
    </Box>
  );
}

export default DrawerMenu;
