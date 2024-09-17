import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: "#1A202C",
      }}
      onSubmit={sendMessage}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#333" },
            "&:hover fieldset": { borderColor: "#fff" },
            "&.Mui-focused fieldset": { borderColor: "#90caf9" },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginLeft: 1,
          backgroundColor: "#333",
          "&:hover": { backgroundColor: "#1A202C" },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
