import React from "react";
import { Alert, Container, Typography } from "@mui/material";

export default function ProfilePage() {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>Profile</Typography>
      <Alert severity="info">
        Account profiles and authentication are planned for the next version of this project.
      </Alert>
    </Container>
  );
}
