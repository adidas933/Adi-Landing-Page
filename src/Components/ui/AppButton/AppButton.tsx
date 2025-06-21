import React from 'react';
import { Button, ButtonProps, useTheme } from '@mui/material';

export function AppButton(props: ButtonProps) {
  const theme = useTheme();
  const { variant = 'contained', children, sx, ...rest } = props;

  const isOutlined = variant === 'outlined';
  const isContained = variant === 'contained';

  return (
    <Button
      variant={variant}
      {...rest}
      sx={{
        fontWeight: 700,
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: isOutlined ? 2 : 3,
        py: 1.2,
        boxShadow: 'none',
        color: isOutlined ? theme.palette.primary.main : 'white',
        backgroundColor: isContained ? theme.palette.primary.main : 'transparent',
        border: isOutlined ? `2px solid ${theme.palette.primary.main}` : 'none',
        '&:hover': {
          backgroundColor: isContained
            ? theme.palette.primary.dark
            : theme.palette.action.hover,
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        },
        transition: 'all 0.3s ease',
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
