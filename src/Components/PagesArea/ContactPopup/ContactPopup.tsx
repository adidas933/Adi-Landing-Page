// ContactPopup.tsx
import { useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) setOpen(true);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          p: 4,
          backgroundColor: 'background.paper',
          borderRadius: 3,
          boxShadow: 6,
          width: '90%',
          maxWidth: 400,
          mx: 'auto',
          mt: '15vh',
        }}
      >
        <Typography variant="h6" gutterBottom>
          דברו איתי 👋
        </Typography>
        <TextField label="שם" fullWidth margin="normal" />
        <TextField label="טלפון" fullWidth margin="normal" />
        <TextField label="אימייל" fullWidth margin="normal" />
        <TextField
          label="מה תרצו?"
          fullWidth
          margin="normal"
          multiline
          rows={3}
        />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          שליחה
        </Button>
      </Box>
    </Modal>
  );
}
