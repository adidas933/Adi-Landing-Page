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
        color: 'text.primary',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />

      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        העמוד לא נמצא
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
        אולי התבלבלת בקישור או שהעמוד הוסר. בוא נחזור למקום הנכון –
        לדף הבית או לצור קשר 🙂
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = '/')}
          sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}
        >
          דף הבית
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => (window.location.href = '#contact')}
          sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}
        >
          צור קשר
        </Button>
      </Box>
    </Box>
  );
}

export default Page404;
