// components/LogoDivider.tsx
import { Box } from '@mui/material';

interface LogoDividerProps {
  height?: number | string;
  src?: string;
  alt?: string;
  my?: number | string; // מרווח אנכי
  opacity?: number;
  maxWidth?: number | string;
}

export function LogoDivider({
  height = 300,
  src = '/images/yoga-logo.png',
  alt = 'Yoga Logo',
  my = 4,
  opacity = 1,
  maxWidth = '100%',
}: LogoDividerProps): JSX.Element {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ height, opacity, maxWidth }}
      />
    </Box>
  );
}
