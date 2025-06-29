// WorkProcess.tsx
import { Box, Typography, Stack } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const steps = ['חקר', 'עיצוב', 'קוד', 'בדיקות', 'השקה'];

export function WorkProcess(): JSX.Element {
  return (
    <Box sx={{ mt: 6, textAlign: 'center', py: 4, px: 2, backgroundColor: 'background.paper', borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>
        איך אני עובד
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" alignItems="center">
        {steps.map((step, i) => (
          <Box key={step} display="flex" alignItems="center">
            <Typography fontWeight={600}>{step}</Typography>
            {i < steps.length - 1 && <ArrowForwardIos fontSize="small" sx={{ mx: 1 }} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
