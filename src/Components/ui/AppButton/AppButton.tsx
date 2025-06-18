import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export function AppButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: 3,
        py: 1.2,
        boxShadow: 'none',
        ...(props.variant === 'outlined' && {
          px: 2, // slightly less horizontal padding for outlined variant
        }),
        '&:hover': {
          boxShadow: '0 4px 10px rgb(0 0 0 / 0.15)',
        },
        ...props.sx,
      }}
    />
  );
}
