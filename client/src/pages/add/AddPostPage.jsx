import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030/api";

const initialForm = {
  title: "",
  description: "",
  category: "general",
  location: "",
  authorName: "",
  contact: "",
};

export default function AddPostPage() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.description.trim() || !form.authorName.trim()) {
      setError("Title, description and your name are required.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      await axios.post(`${API_URL}/posts`, form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Could not create the post.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Create a partner request
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Tell people what kind of partner you are looking for.
      </Typography>

      <Stack component="form" spacing={2} onSubmit={submit}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={updateField}
          required
        />

        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={updateField}
          multiline
          minRows={4}
          required
        />

        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={form.category}
            onChange={updateField}
          >
            <MenuItem value="apartment">Apartment</MenuItem>
            <MenuItem value="studies">Studies</MenuItem>
            <MenuItem value="vacation">Vacation</MenuItem>
            <MenuItem value="general">General</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Location"
          name="location"
          value={form.location}
          onChange={updateField}
        />

        <TextField
          label="Your name"
          name="authorName"
          value={form.authorName}
          onChange={updateField}
          required
        />

        <TextField
          label="Contact details"
          name="contact"
          value={form.contact}
          onChange={updateField}
          helperText="For a demo project, use non-sensitive contact details."
        />

        <Button type="submit" variant="contained" size="large" disabled={saving}>
          {saving ? "Publishing..." : "Publish post"}
        </Button>
      </Stack>
    </Container>
  );
}
