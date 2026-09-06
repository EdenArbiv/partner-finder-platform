import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  MenuItem,
  Box,
  Menu,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function Header({ setIsNavOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const travelTo = (dest) => {
    navigate(dest);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open navigation"
          sx={{ mr: 2 }}
          onClick={() => setIsNavOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Partner Finder
        </Typography>

        <Button
          color="inherit"
          startIcon={<AddIcon />}
          onClick={() => navigate("/add")}
          sx={{ mr: 1 }}
        >
          New post
        </Button>

        <Box>
          <Tooltip title="Profile">
            <IconButton color="inherit" onClick={(event) => setAnchorEl(event.currentTarget)}>
              <AccountCircle />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => travelTo("/profile")}>Profile</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
