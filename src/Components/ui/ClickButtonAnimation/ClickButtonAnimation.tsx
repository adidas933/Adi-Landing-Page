import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box } from '@mui/material';

export function ClickButtonAnimation(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // או גובה אחר אם אתה רוצה למרכז יחסית לאזור מסוים
        width: '100%',
      }}
    >
      <DotLottieReact
        src="/animations/click-button-animation.lottie"
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </Box>
  );
}
