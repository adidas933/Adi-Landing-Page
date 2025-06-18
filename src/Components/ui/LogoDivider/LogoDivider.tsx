// components/LogoDivider.tsx
import { Box } from '@mui/material';

interface LogoDividerProps {
  height?: number | string;
  src?: string;
  alt?: string;
}

export function LogoDivider({
  height = 300,
  src = '/images/yoga-logo.png',
  alt = 'Yoga Logo',
}: LogoDividerProps): JSX.Element {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ height }}
      />
    </Box>
  );
}
