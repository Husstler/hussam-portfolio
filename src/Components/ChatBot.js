import React, { useState } from "react";
import { Configuration, OpenAI } from "openai";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  maxWidth: 600,
  padding: theme.spacing(3),
}));

const MessageContainer = styled("div")(({ theme, user }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  borderRadius: "8px",
  backgroundColor: user
    ? theme.palette.secondary.main
    : theme.palette.primary.main,
  color: user
    ? theme.palette.secondary.contrastText
    : theme.palette.primary.contrastText,
  textAlign: user ? "right" : "left",
  alignSelf: user ? "flex-end" : "flex-start",
  maxWidth: "60%",
}));

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input) {
      // Add user message to messages array
      const updatedMessages = [...messages, { user: true, text: input }];
      setMessages(updatedMessages);
  
      // Get chat bot response and add it to messages array
      const response = await fetch(
        "https://hussam-qgicw5g3m-husstler.vercel.app/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: input }),
        }
      );
      const data = await response.json();
      const botResponse = { user: false, text: data.response };
      setMessages([...updatedMessages, botResponse]);
  
      setInput("");
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box>
      <Typography variant="subtitle">The end goal for this bot is to turn it into an interactive AI that answers any questions about, the AI still needs training at the moment so please bear that in mind when interacting with it.</Typography>
      {" "}
      <Paper component={Container}>
        {messages.map((message, index) => (
          <MessageContainer key={index} user={message.user}>
            {message.user ? "You: " : "ChatBot: "}
            {message.text}
          </MessageContainer>
        ))}
        <Box display="flex" justifyContent="center" alignItems="center" margin={2}>
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            label="Type your message here"
            sx={{ marginRight: 2 }}
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
