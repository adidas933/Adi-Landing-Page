import { Box, Typography, Grid, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as ScrollLink } from 'react-scroll';
import {
  googleMapsLink,
  mainMenu,
  studioAddress,
  wazeLink,
} from '../../Utils/Variables/Variables';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        pt: 6,
        pb: 3,
        px: { xs: 4, md: 8 }, // ריווח אופקי מוגדל
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
            src="/images/yoga-logo.png"
            alt="לוגו יוגה ברקפת"
            style={{ height: 70 }}
          />
          <Typography variant="h5" fontWeight="bold">
            יוגה ברקפת
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

        {/* אייקוני תקשורת ורשתות חברתיות */}
        <Stack direction="row" spacing={2}>
          <IconButton
            href="https://wa.me/972506660706?text=היי%20גלית,%20אני%20מתעניין%2Fת%20בשיעור%20יוגה"
            target="_blank"
            aria-label="WhatsApp"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#25D366', // משאירים מותג WhatsApp
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'background.default',
                transform: 'scale(1.1)',
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            href="tel:+972506660706"
            aria-label="Phone"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#8b5227', // חום מהתמה
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'background.default', // כתום בהיר hover
                transform: 'scale(1.1)',
              },
            }}
          >
            <PhoneIcon />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/Yugarakefet"
            target="_blank"
            aria-label="Facebook"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#8b5227', // חום מהתמה
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#fbe9dc', // כתום בהיר hover
                transform: 'scale(1.1)',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/sitbongalit/"
            target="_blank"
            aria-label="Instagram"
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid #ccc',
              color: '#E4405F',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'background.default',
                transform: 'scale(1.1)',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>

        {/* כתובת וקישורים חיצוניים */}
        <Stack alignItems="center" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">{studioAddress}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <IconButton
              href={googleMapsLink}
              target="_blank"
              aria-label="Google Maps"
              sx={{
                p: 0,
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Box
                component="img"
                src="/images/google-maps-logo.png"
                alt="Google Maps"
                sx={{ height: 36, width: 36, mt: '-5px' }}
              />
            </IconButton>

            <IconButton
              href={wazeLink}
              target="_blank"
              aria-label="Waze"
              sx={{
                p: 0,
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Box
                component="img"
                src="/images/waze-logo.png"
                alt="Waze"
                sx={{ height: 36, width: 36 }}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="caption" sx={{ mt: 2, opacity: 0.6 }}>
          האתר נבנה על ידי{' '}
          <a
            href="tel:0500000000"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            עדי ונונו – 050-3877326
          </a>
        </Typography>

        {/* זכויות יוצרים */}
        <Typography variant="caption" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} כל הזכויות שמורות ל־יוגה ברקפת
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
