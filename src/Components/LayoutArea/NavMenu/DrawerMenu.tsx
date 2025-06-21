import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Stack,
  useTheme,
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
}

function DrawerMenu({ items, onClose }: DrawerMenuProps): JSX.Element {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const theme = useTheme();

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
        pt: 6,
        maxWidth: '100%',
        overflowX: 'hidden',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      {/* לוגו וכותרת */}
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

      {/* רשימת פריטים */}
      <List>
        {items.map((item) =>
          item.children ? (
            <Box key={item.label}>
              <ListItemButton
                onClick={() => handleClick(item.label)}
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  mb: 1,
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                <ListItemText primary={item.label} />
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
                          color: theme.palette.primary.contrastText,
                          fontWeight: 500,
                          fontSize: '1rem',
                          borderRadius: '8px',
                          mb: 1,
                          textAlign: 'center',
                          justifyContent: 'center',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        <ListItemText primary={child.label} />
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
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  mb: 1,
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          )
        )}
      </List>
    </Box>
  );
}

export default DrawerMenu;
