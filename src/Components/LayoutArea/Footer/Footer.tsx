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
        backgroundColor: 'primary.main',
        borderTop: '1px solid',
        borderColor: 'divider',
        color: 'primary.contrastText',
      }}
    >
      <Stack alignItems="center" spacing={3} textAlign="center" direction="column">
        {/* משפט אישי ולוגו */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: 'italic',
              fontWeight: 400,
              opacity: 0.9,
              fontSize: '1.1rem',
              mb: 1,
              direction: 'rtl',
            }}
          >
            העיצוב מושך עין. הדיוק שומר על מבקרים
          </Typography>
          <Box>
            <img
              src="/images/header-logo.png"
              alt="לוגו Adi Sites"
              style={{ height: 150 }}
            />
          </Box>
        </Box>

        {/* תפריט ניווט מימין לשמאל */}
        <Grid
          container
          spacing={1}
          justifyContent="center"
          maxWidth="md"
          direction="row-reverse"
        >
          {mainMenu.map(({ label, to }, index) => (
            <Grid item xs={6} sm={4} md={2} key={index} textAlign="center">
              <ScrollLink to={to} smooth duration={500} offset={-80}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    py: 0.8,
                    px: 2,
                    transition: 'all 0.3s',
                    boxShadow: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Typography variant="body2" fontWeight="500" color="inherit">
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
              backgroundColor: 'background.paper',
              border: '1px solid #25D366',
              color: '#25D366',
              '&:hover': {
                backgroundColor: '#25D366',
                color: '#fff',
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            href="tel:+972503877326"
            aria-label="Phone"
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid #1976d2',
              color: '#1976d2',
              '&:hover': {
                backgroundColor: '#1976d2',
                color: '#fff',
              },
            }}
          >
            <PhoneIcon />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/yourpage"
            target="_blank"
            aria-label="Facebook"
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid #4267B2',
              color: '#4267B2',
              '&:hover': {
                backgroundColor: '#4267B2',
                color: '#fff',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
          

          <IconButton
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            aria-label="Instagram"
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid #E4405F',
              color: '#E4405F',
              '&:hover': {
                backgroundColor: '#E4405F',
                color: '#fff',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>

        {/* קרדיט וחתימה */}
        <Box textAlign="center" mt={2}>
          <Typography
            variant="caption"
            sx={{ opacity: 0.8, direction: 'rtl', mb: 0.5 }}
          >
            האתר נבנה על ידי עדי ונונו – פיתוח אתרים ודפי נחיתה בקוד
          </Typography>
          <Box>

          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} כל הזכויות שמורות
          </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
