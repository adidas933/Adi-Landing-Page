import { Box, Typography, Grid, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as ScrollLink } from 'react-scroll';
import { mainMenu } from '../../Utils/Variables/Variables';

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        pt: 6,
        pb: 3,
        px: { xs: 4, md: 8 },
        backgroundColor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'text.primary',
      }}
    >
      <Stack alignItems="center" spacing={4}>
        {/* לוגו וכותרת */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src="/images/logo-adi-sites.png"
            alt="לוגו Adi Sites"
            style={{ height: 70 }}
          />
          <Typography variant="h5" fontWeight="bold">
            Adi Sites
          </Typography>
        </Stack>

        {/* קישורי ניווט */}
        <Grid container spacing={1} justifyContent="center" maxWidth="md">
          {mainMenu.map(({ label, to }, index) => (
            <Grid item xs={6} sm={4} md={2} key={index} textAlign="center">
              <ScrollLink to={to} smooth duration={500} offset={-80}>
                <Box
                  sx={{
                    backgroundColor: 'background.default',
                    borderRadius: '8px',
                    py: 0.8,
                    px: 2,
                    transition: 'all 0.3s',
                    boxShadow: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'background.default',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Typography variant="body2" fontWeight="500" color="primary">
                    {label}
                  </Typography>
                </Box>
              </ScrollLink>
            </Grid>
          ))}
        </Grid>

        {/* אייקוני תקשורת */}
        <Stack direction="row" spacing={2}>
          <IconButton
            href="https://wa.me/972503877326?text=היי%20עדי,%20אני%20מעוניין%20באתר%20או%20דף%20נחיתה"
            target="_blank"
            aria-label="WhatsApp"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#25D366',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            href="tel:+972503877326"
            aria-label="Phone"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#0d47a1',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            <PhoneIcon />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/yourpage"
            target="_blank"
            aria-label="Facebook"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#4267B2',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            aria-label="Instagram"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#E4405F',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>

        {/* חתימה */}
        <Typography variant="caption" sx={{ mt: 2, opacity: 0.6 }}>
          האתר נבנה על ידי{' '}
          <a
            href="https://adisite.co.il"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Adi Sites – פיתוח אתרים ודפי נחיתה בקוד
          </a>
        </Typography>

        <Typography variant="caption" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} כל הזכויות שמורות
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
