import { Box, Card, Fade, Grid, Typography, Button } from '@mui/material';
import { classes } from '../../Utils/Variables/Variables';

export function Classes(): JSX.Element {
  return (
    <Box
      id="classes"
      sx={{
        px: { xs: 3, sm: 6, md: 12 }, // יותר ריווח בצדדים
        py: 6,
        direction: 'rtl',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 600,
          color: '#203a43',
        }}
      >
        השיעורים שלנו
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {classes.map((cls, index) => (
          <Fade in={true} timeout={1000} key={index}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 6 }}>
                <Box
                  component="img"
                  src={cls.image}
                  alt={cls.title}
                  sx={{
                    width: '100%',
                    height: { xs: 220, sm: 260, md: 300 }, // תמונה גבוהה יותר בכל המסכים
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f2027' }}>
                    {cls.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#203a43' }}>
                    {cls.description}
                  </Typography>
                </Box>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    href="#contact"
                    fullWidth
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                      backgroundColor: '#203a43',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f2027',
                      },
                    }}
                  >
                    צור קשר
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
}
