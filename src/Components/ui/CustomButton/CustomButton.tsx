// components/ui/CustomButton.tsx
import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      {...props}
    />
  );
}
