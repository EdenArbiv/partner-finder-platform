import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030/api";
const categories = ["all", "apartment", "studies", "vacation", "general"];

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
        setError("");
      } catch (err) {
        setError("Could not load posts. Make sure the server and MongoDB are running.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const visiblePosts = useMemo(() => {
    if (category === "all") return posts;
    return posts.filter((post) => post.category === category);
  }, [posts, category]);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Stack spacing={3}>
        <Box textAlign="center">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Find the right partner
          </Typography>
          <Typography color="text.secondary">
            Connect with people looking for a roommate, study partner, travel partner or something else.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" justifyContent="center">
          {categories.map((item) => (
            <Chip
              key={item}
              label={item}
              color={category === item ? "primary" : "default"}
              onClick={() => setCategory(item)}
              sx={{ textTransform: "capitalize" }}
            />
          ))}
        </Stack>

        <Box textAlign="center">
          <Button variant="contained" onClick={() => navigate("/add")}>
            Create a post
          </Button>
        </Box>

        {loading && (
          <Box textAlign="center"><CircularProgress /></Box>
        )}

        {error && <Alert severity="warning">{error}</Alert>}

        {!loading && !error && visiblePosts.length === 0 && (
          <Alert severity="info">No posts in this category yet. Be the first to create one.</Alert>
        )}

        {visiblePosts.map((post) => (
          <Card key={post._id} variant="outlined">
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                <Box>
                  <Typography variant="h6" fontWeight={700}>{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.authorName} · {post.location || "Location not specified"}
                  </Typography>
                </Box>
                <Chip label={post.category} size="small" />
              </Stack>

              <Typography sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
                {post.description}
              </Typography>

              {post.contact && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Contact: {post.contact}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
