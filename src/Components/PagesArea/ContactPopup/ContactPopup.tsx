import { useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const openPopup = () => {
      if (!hasOpened) {
        setOpen(true);
        setHasOpened(true);
        removeListeners();
      }
    };

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const halfPage = document.body.scrollHeight / 2;
      if (scrolled >= halfPage) {
        openPopup();
      }
    };

    const timer = setTimeout(() => {
      openPopup();
    }, 15000); // 15 שניות

    const removeListeners = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      removeListeners();
    };
  }, [hasOpened]);

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
