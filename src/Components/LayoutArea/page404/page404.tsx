import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function Page404(): JSX.Element {
  return (
    <Box
      className="page404"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3,
        direction: 'rtl',
        backgroundColor: 'background.default',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: '#dc004e', mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        מצטערים, הדף לא נמצא
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
        הדף שביקשת לא קיים או הועבר. בדוק את כתובת האתר או חזור לדף הבית.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => (window.location.href = '/')}
        sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}
      >
        חזור לדף הבית
      </Button>
    </Box>
  );
}

export default Page404;
