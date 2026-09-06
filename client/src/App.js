import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";

export default function App() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const travelTo = (dest) => {
    navigate(dest);
    setIsNavOpen(false);
  };

  return (
    <div>
      <Header setIsNavOpen={setIsNavOpen} />
      <Drawer
        anchor="left"
        open={isNavOpen}
        onClose={() => setIsNavOpen(false)}
      >
        <List sx={{ width: 240 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("/")}>
              <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("/info")}>
              <ListItemIcon><InfoIcon color="primary" /></ListItemIcon>
              <ListItemText primary="How it works" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("/add")}>
              <ListItemIcon><AddIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Create post" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main />
    </div>
  );
}
