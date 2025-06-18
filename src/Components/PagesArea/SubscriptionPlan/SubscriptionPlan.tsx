import { Box, Typography, Paper, Button, Stack } from "@mui/material";

function SubscriptionPlan(): JSX.Element {
  return (
    <Box
      id="subscription"
      sx={{
        py: 6,
        px: 2,
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          תכנית חודשית
        </Typography>

        <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
          ₪300
        </Typography>

        <Typography variant="body1" color="text.secondary" gutterBottom>
          לחודש כולל גישה חופשית לכל השיעורים
        </Typography>

        <Typography
          variant="h6"
          color="success.main"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          אימון ניסיון חינם!
        </Typography>

        <Stack direction="column" spacing={2} mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 5,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem",
            }}
            href="https://wa.me/97250XXXXXXX?text=שלום!%20מעוניינת%20באימון%20ניסיון%20חינם%20ויוגה%20במנוי%20חודשי"
            target="_blank"
          >
            עזרו לי להתחיל
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default SubscriptionPlan;
