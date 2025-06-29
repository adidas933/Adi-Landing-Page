// Testimonial.tsx
import { Box, Typography, Paper } from '@mui/material';

export function Testimonial(): JSX.Element {
  return (
    <Box sx={{ mt: 6, py: 4, px: 2, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>
        מה לקוחות אומרים
      </Typography>
      <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
        <Typography variant="body1" fontStyle="italic">
          “האתר שעדי בנה לי נראה מדהים, עובד מהר, והוא הצליח לקלוע בדיוק למה שרציתי. ממליצה בחום!”
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 500 }}>
          – לקוחה מרוצה
        </Typography>
      </Paper>
    </Box>
  );
}
