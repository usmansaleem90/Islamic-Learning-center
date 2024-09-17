import React, { useEffect, useRef } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MessageList.css"; // Make sure to create this CSS file

const MessageList = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Paper
      sx={{
        height: "calc(100vh - 110px)",
        overflow: "auto",
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#1A202C",
        color: "#e0e0e0",
      }}
    >
      <List sx={{ maxHeight: "100%", overflow: "auto" }}>
        <TransitionGroup>
          {messages?.map((message, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <ListItem sx={{ borderBottom: "1px solid #424242" }}>
                <ListItemText
                  primary={message?.text}
                  secondary={message?.sender === "bot" ? "Chatbot" : "You"}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: "bold",
                      color: message?.sender === "bot" ? "#90caf9" : "#ef9a9a",
                    },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      color: "#b0bec5",
                    },
                  }}
                />
              </ListItem>
            </CSSTransition>
          ))}
          {loading && (
            <CSSTransition key="loading" timeout={500} classNames="fade">
              <ListItem>
                <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                  Chatbot is typing...
                </Typography>
              </ListItem>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div ref={messagesEndRef} />
      </List>
    </Paper>
  );
};

export default MessageList;
