import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import MessageList from "./pages/chatinput/MessageList";
import ChatInput from "./pages/chatinput/ChatInput";
import Navbar from "./pages/layout/Navbar";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import HomeScreen from './components/HomeScreen';
import Home from "./pages/Web/Home/Home";
import ReadQuran from "./pages/EnglishQuran/pages/ReadQuran";
import RnadomQuotes from "./pages/EnglishQuran/pages/Home";
function App() {
  const [sessions, setSessions] = useState({
    1: {
      id: 1,
      name: "Chat Session",
      messages: [
        { id: 0, text: "Hello, how can I help you today?", sender: "bot" },
        {
          id: 1,
          text: "Can you explain how to use this chat app?",
          sender: "user",
        },
        { id: 2, text: "Sure! Just type your question.", sender: "bot" },
      ],
    },
  });
  const [activeSessionId, setActiveSessionId] = useState(1);
  const [loading, setLoading] = useState(false);

  const getRandomSorryResponse = () => {
    const sorryResponses = [
      "I'm sorry, I couldn't find an answer to that.",
      "Hmm, I'm not sure about that. Try asking something else?",
      "Sorry, I don't have the information you're looking for.",
      "I couldn't find a match for your query. Can you try rephrasing?",
      "I'm afraid I don't know the answer to that. Maybe ask another question?",
    ];
    return sorryResponses[Math.floor(Math.random() * sorryResponses.length)];
  };

  const handleSendMessage = async (newMessage) => {
    const newMessageObject = {
      id: sessions[activeSessionId].messages.length,
      text: newMessage,
      sender: "user",
    };
    const newMessages = [
      ...sessions[activeSessionId].messages,
      newMessageObject,
    ];
    const updatedSessions = {
      ...sessions,
      [activeSessionId]: {
        ...sessions[activeSessionId],
        messages: newMessages,
      },
    };
    setSessions(updatedSessions);

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/chat` , {
          userInput :newMessage
        }
      );
      console.log(response.data.message);
      let botMessageText =
        response.data.message ||
        getRandomSorryResponse();

      // Clean the response by removing all HTML tags
      // botMessageText = botMessageText.replace(/<\/?[^>]+(>|$)/g, "");

      const botMessage = {
        id: newMessages.length,
        text: botMessageText,
        sender: "bot",
      };
      const updatedMessages = [...newMessages, botMessage];
      setSessions({
        ...sessions,
        [activeSessionId]: {
          ...sessions[activeSessionId],
          messages: updatedMessages,
        },
      });
    } catch (error) {
      const botMessage = {
        id: newMessages.length,
        text: getRandomSorryResponse(),
        sender: "bot",
      };
      const updatedMessages = [...newMessages, botMessage];
      setSessions({
        ...sessions,
        [activeSessionId]: {
          ...sessions[activeSessionId],
          messages: updatedMessages,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const createNewSession = () => {
    const newSessionId = Object.keys(sessions).length + 1;
    setSessions({
      ...sessions,
      [newSessionId]: {
        id: newSessionId,
        name: `Chat Session ${newSessionId}`,
        messages: [],
      },
    });
    setActiveSessionId(newSessionId);
  };

  return (
    <>
    <BrowserRouter>
    
    <CssBaseline />
    <Layout
      sessions={sessions}
      setActiveSessionId={setActiveSessionId}
      createNewSession={createNewSession}
    >
      <Routes>
      <Route path="/" element={<Login />} />

      <Route
  path="/chatbot"
  element={
    <div className="chatbot-container">
      <MessageList
        messages={sessions[activeSessionId].messages}
        loading={loading}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  }
/>
        <Route
          path="/quran"
          element={
            <>
              <HomeScreen />
            </>
          }
        />
         <Route
          path="/ReadQuran"
          element={
            <>
              <ReadQuran />
            </>
          }
        />
         <Route
          path="/RnadomQuotes"
          element={
            <>
              <RnadomQuotes />
            </>
          }
        />


       <Route
          path="/home"
          element={
            <>
              <Home/>
            </>
          }
        />
      
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Layout>
  </BrowserRouter>
    </>
  );
}

function Layout({ children, sessions, setActiveSessionId, createNewSession }) {
  const location = useLocation();
  let showNavbar =
    location.pathname === "/home"
      ? false
      : location.pathname === "/sign-up"
      ? false
      : location.pathname === "/chatbot"
      ? true
      : location.pathname === "/login"
      ? false
      : location.pathname === "/"
      ?false
      : location.pathname === "/quran"
      ?false
      : location.pathname === "/ReadQuran"
      ?false
      : location.pathname === "/RnadomQuotes"
      ?false
      : true;


  return (
    <Box
    className="mx-0 px-0"
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: showNavbar ? "0" : "0px",
      }}
    
    >
      {showNavbar && (
        <Navbar
          sessions={sessions}
          setActiveSessionId={setActiveSessionId}
          createNewSession={createNewSession}
        />
      )}
      <Container className="mx-0 px-0 "
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default App;
