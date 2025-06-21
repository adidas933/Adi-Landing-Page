import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

export function Contact(): JSX.Element {
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams(
        contactData as Record<string, string>
      ).toString();

      const url = `https://script.google.com/macros/s/AKfycbzhK_bO8zhduV6OJWLz2i5gvDW411IlofCZuo-XuKPLH-aQ7iMGP9jQ7E-zyeheCRs5/exec?${params}`;

      const res = await fetch(url, { method: 'GET' });

      if (res.ok) {
        alert(`תודה שפנית אליי, ${contactData.name}! אחזור אליך בהקדם 🙌`);
        setContactData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('משהו השתבש. נסה שוב בעוד רגע.');
      }
    } catch {
      alert('קרתה תקלה, אנא נסה מאוחר יותר.');
    }

    setLoading(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        my: 8,
        p: 4,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
        direction: 'rtl',
        textAlign: 'right',
        color: 'text.primary',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
          textAlign: 'center',
          color: 'primary.main',
        }}
      >
        בוא נדבר
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}
      >
        ספר לי מה אתה צריך – אתר, דף נחיתה או מיתוג דיגיטלי – ואחזור אליך תוך זמן קצר.
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="שם מלא"
          name="name"
          value={contactData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          inputProps={{ style: { textAlign: 'right' } }}
        />
        <TextField
          label="טלפון"
          name="phone"
          value={contactData.phone}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          inputProps={{ style: { textAlign: 'right' } }}
        />
        <TextField
          label="אימייל"
          name="email"
          value={contactData.email}
          onChange={handleInputChange}
          fullWidth
          required
          type="email"
          sx={{ mb: 2 }}
          inputProps={{ style: { textAlign: 'right' } }}
        />
        <TextField
          label="איך אוכל לעזור?"
          name="message"
          value={contactData.message}
          onChange={handleInputChange}
          fullWidth
          required
          multiline
          rows={4}
          sx={{ mb: 3 }}
          inputProps={{ style: { textAlign: 'right' } }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth
          color="primary"
          sx={{
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          {loading ? 'שולח...' : 'שלח הודעה'}
        </Button>
      </form>
    </Box>
  );
}
