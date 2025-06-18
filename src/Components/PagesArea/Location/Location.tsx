import { Box, Typography,  IconButton, Card } from '@mui/material';
import {
  googleMapsLink,
  studioAddress,
  wazeLink,
} from '../../Utils/Variables/Variables';

export function Location(): JSX.Element {

  return (
    <Box
      id="location"
      sx={{
        px: 4,
        textAlign: 'center',
        borderRadius: 3,
        mx: { xs: 2, md: 0 },
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      }}
      >
      <Card
      sx={{
                  maxWidth: 345,  // limit width to 345px (or adjust as you want)
          margin: 'auto', // center horizontally

      }} >

      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        היכן נמצא הסטודיו שלנו?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {studioAddress}
      </Typography>

      <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
        <IconButton
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: 64, height: 64 }}
          >
          <Box
            component="img"
            src={'/images/google-maps-logo.png'}
            alt="Google Maps"
            sx={{ width: '100%', height: '100%', mt:-1 }}
            />
        </IconButton>
        <IconButton
          href={wazeLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: 64, height: 64 }}
          >
          <Box
            component="img"
            src={'/images/waze-logo.png'}
            alt="Waze"
            sx={{ width: '100%', height: '100%' }}
            />
        </IconButton>
      </Box>
            </Card>
    </Box>
  );
}
