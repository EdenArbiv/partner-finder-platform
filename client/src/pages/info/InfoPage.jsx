import React from "react";
import { Container, Stack, Typography } from "@mui/material";

export default function InfoPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={700}>How Partner Finder works</Typography>
        <Typography>
          Partner Finder helps people publish requests for a roommate, study partner,
          travel partner or another shared activity.
        </Typography>
        <Typography variant="h6">1. Choose a category</Typography>
        <Typography color="text.secondary">
          Browse apartment, studies, vacation and general posts.
        </Typography>
        <Typography variant="h6">2. Create a clear post</Typography>
        <Typography color="text.secondary">
          Add a title, description, location and optional contact details.
        </Typography>
        <Typography variant="h6">3. Keep it safe</Typography>
        <Typography color="text.secondary">
          Do not publish passwords, payment details or other sensitive personal information.
        </Typography>
      </Stack>
    </Container>
  );
}
