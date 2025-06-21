// components/ui/CustomButton.tsx
import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
      size={props.size || 'large'}
      sx={{
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: 3,
        py: 1.2,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 10px rgb(0 0 0 / 0.15)',
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
}
