// components/ui/CustomButton.tsx
import { Button, ButtonProps, useTheme } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  const theme = useTheme();
  const {
    variant = 'contained',
    color = 'primary',
    size = 'large',
    children,
    sx,
    ...rest
  } = props;

  const isOutlined = variant === 'outlined';
  const isContained = variant === 'contained';

  // פתרון לבעיה עם theme.palette[color]
  const paletteColor =
    color === 'primary'
      ? theme.palette.primary
      : color === 'secondary'
      ? theme.palette.secondary
      : color === 'success'
      ? theme.palette.success
      : color === 'error'
      ? theme.palette.error
      : color === 'info'
      ? theme.palette.info
      : color === 'warning'
      ? theme.palette.warning
      : theme.palette.primary;

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      {...rest}
      sx={{
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: 2,
        px: isOutlined ? 2 : 3,
        py: 1.2,
        boxShadow: 'none',
        color: isOutlined ? paletteColor.main : 'white',
        backgroundColor: isContained ? paletteColor.main : 'transparent',
        border: isOutlined ? `2px solid ${paletteColor.main}` : 'none',
        '&:hover': {
          backgroundColor: isContained
            ? paletteColor.dark
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
