import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Avatar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon for the toggle button
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import SettingsModal from "./components/SettingsModal";

const drawerWidth = 240;

const Navbar = ({ sessions, setActiveSessionId, createNewSession }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const openSettings = () => {
    setSettingsOpen(true);
    handleMenuClose();
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <Box>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ marginLeft: 1 }}
        >
          <MenuIcon style={{ color: "#FFFF" }} />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1A202C",
            color: "#CBD5E0",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Chat Sessions
          </Typography>
          <IconButton
            sx={{ color: "white", ml: "auto" }}
            onClick={createNewSession}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Toolbar>
        <List>
          {Object.values(sessions).map((session) => (
            <ListItem
              button
              key={session.id}
              onClick={() => setActiveSessionId(session.id)}
            >
              <ListItemIcon>
                <Avatar sx={{ bgcolor: "secondary.main" }}>{session.id}</Avatar>
              </ListItemIcon>
              <ListItemText primary={`Session ${session.id}`} />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            p: 2,
            mt: "auto",
            backgroundColor: "#2D3748",
            width: "100%",
          }}
        >
          <ListItem
            button
            onClick={handleMenuClick}
            sx={{ width: "100%", p: 0, color: "white" }}
          >
            <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>U</Avatar>
            <ListItemText primary="M Usman" sx={{ flex: 1 }} />
            <ListItemIcon>
              <MoreVertIcon />
            </ListItemIcon>
          </ListItem>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
            },
          }}
        >
          <MenuItem onClick={openSettings}>Settings</MenuItem>
          <a href="/home"className="ms-3">Home</a>

        </Menu>
        <SettingsModal open={isSettingsOpen} onClose={closeSettings} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
