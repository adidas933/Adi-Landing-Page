import { Container, Box, Typography, Button, useTheme } from '@mui/material';

export default function MiniSitePreview() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          color={theme.palette.text.primary}
        >
          הדגמה חיה – איך זה מרגיש
        </Typography>

        {/* Hero Section Simulation */}
        <Box
          sx={{
            height: '60vh',
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 5,
            px: 2,
          }}
        >
          <Typography variant="h3" fontWeight="bold">כותרת ראשית</Typography>
          <Typography variant="h6" mt={2}>טקסט קצר ומשכנע עם קריאה לפעולה</Typography>
          <Button variant="contained" sx={{ mt: 4 }}>התחילו עכשיו</Button>
        </Box>

        {/* Services Simulation */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
            mb: 5,
          }}
        >
          {['מהיר', 'מותאם אישית', 'ריספונסיבי'].map((item, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: theme.palette.background.paper,
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="h6" fontWeight="bold">{item}</Typography>
              <Typography variant="body2">פסקה שמסבירה למה זה חשוב.</Typography>
            </Box>
          ))}
        </Box>

        {/* Testimonial Simulation */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          <Typography fontStyle="italic" mb={2} color={theme.palette.text.secondary}>
            "האתר שדרג לי את כל העסק – אני מקבל פניות כל שבוע"
          </Typography>
          <Typography variant="body2" color={theme.palette.text.primary}>
            – לקוח מרוצה
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
