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

      const res = await fetch(url, {
        method: 'GET',
      });

      if (res.ok) {
        alert(`תודה שפנית אלינו, ${contactData.name}!`);
        setContactData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר.');
      }
    } catch (err) {
      alert('אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר.');
    }

    setLoading(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 4,
        backgroundColor: 'background.default',
        borderRadius: 3,
        boxShadow: '0 0 15px rgba(32, 58, 67, 0.1)',
        direction: 'rtl',           // הוספת כיוון מימין לשמאל
        textAlign: 'right',         // יישור טקסט לימין (לשם ויזואליות אחידה)
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 600, textAlign: 'center', color: '#203a43' }}
      >
        צור קשר
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="שם מלא"
          variant="outlined"
          fullWidth
          name="name"
          value={contactData.name}
          onChange={handleInputChange}
          sx={{ mb: 2, direction: 'rtl', textAlign: 'right' }}
          inputProps={{ style: { textAlign: 'right', direction: 'rtl'  } }} // טקסט בשדה מיושר לימין
          required
        />
        <TextField
          label="מספר טלפון"
          variant="outlined"
          fullWidth
          name="phone"
          value={contactData.phone}
          onChange={handleInputChange}
          sx={{ mb: 2, direction: 'rtl', textAlign: 'right' }}
          inputProps={{ style: { textAlign: 'right' } }}
          required
        />
        <TextField
          label="אימייל"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={contactData.email}
          onChange={handleInputChange}
          sx={{ mb: 2, direction: 'rtl', textAlign: 'right' }}
          inputProps={{ style: { textAlign: 'right' } }}
          required
        />
        <TextField
          label="הודעה"
          variant="outlined"
          fullWidth
          name="message"
          multiline
          rows={4}
          value={contactData.message}
          onChange={handleInputChange}
          sx={{ mb: 3, direction: 'rtl', textAlign: 'right' }}
          inputProps={{ style: { textAlign: 'right' } }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{
            py: 1.5,
            fontWeight: 'bold',
            backgroundColor: '#203a43',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0f2027',
            },
          }}
        >
          {loading ? 'שולח...' : 'שלח'}
        </Button>
      </form>
    </Box>
  );
}
