import React from 'react';
import { Button, ButtonProps, useTheme } from '@mui/material';

export function AppButton(props: ButtonProps) {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: props.variant === 'outlined' ? 2 : 3,
        py: 1.2,
        boxShadow: 'none',
        color: props.variant === 'outlined' ? theme.palette.primary.main : 'white',
        backgroundColor:
          props.variant === 'contained' ? theme.palette.primary.main : 'transparent',
        border:
          props.variant === 'outlined' ? `2px solid ${theme.palette.primary.main}` : 'none',
        '&:hover': {
          boxShadow: '0 4px 10px rgb(0 0 0 / 0.15)',
          backgroundColor:
            props.variant === 'contained'
              ? theme.palette.primary.dark
              : 'rgba(0,0,0,0.04)',
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
}
