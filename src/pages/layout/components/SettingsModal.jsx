import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Avatar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SettingsModal = ({ open, onClose }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePic("");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "#1A202C",
          color: "#FFFFFF",
        },
      }}
    >
      <DialogTitle sx={{ color: "#FFFFFF" }}>Update Your Settings</DialogTitle>
      <DialogContent>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="settings tabs"
          textColor="inherit"
          indicatorColor="primary"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Change Password" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputLabelProps={{ style: { color: "#AAA" } }}
                InputProps={{ style: { color: "#FFF" } }}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#B0BEC5" }}
              >
                Profile Picture
              </Typography>
              <Avatar
                src={profilePic}
                sx={{
                  width: 90,
                  height: 90,
                  mb: 2,
                  mx: "auto",
                  border: "2px solid #333",
                }}
              />
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{ color: "#90CAF9" }}
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <TextField
            margin="dense"
            required
            fullWidth
            label="Old Password"
            type="password"
            variant="outlined"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: "#AAA" } }}
            InputProps={{ style: { color: "#FFF" } }}
          />
          <TextField
            margin="dense"
            required
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: "#AAA" } }}
            InputProps={{ style: { color: "#FFF" } }}
          />
          <TextField
            margin="dense"
            required
            fullWidth
            label="Confirm New Password"
            type="password"
            variant="outlined"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            InputLabelProps={{ style: { color: "#AAA" } }}
            InputProps={{ style: { color: "#FFF" } }}
          />
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error" variant="outlined">
          Close
        </Button>
        <Button
          onClick={() => {
            if (newPassword === confirmNewPassword) onClose();
          }}
          color="primary"
          variant="contained"
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
