import { Box, Typography, Grid } from '@mui/material';
import { testimonials } from '../../Utils/Variables/Variables';

export function Testimonials(): JSX.Element {
  return (
    <Box id="testimonials" sx={{ px: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        מתאמנים מספרים
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map(({ name, description, youtubeId }) => (
          <Grid item xs={12} sm={6} md={4} key={youtubeId}>
            <Box sx={{ aspectRatio: '16 / 9', mb: 1 }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={`וידאו של ${name}`}
                loading="lazy"
                allowFullScreen
                style={{ borderRadius: 10 }}
              />
            </Box>
            <Typography variant="subtitle1" align="center">
              {name}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              {description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
