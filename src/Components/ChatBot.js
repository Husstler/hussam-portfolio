import React, { useState } from "react";
import { Configuration, OpenAI } from "openai";
import { Box, Button, makeStyles, Paper, TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    maxWidth: 600,
    padding: theme.spacing(3),
  },
  message: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: "left",
    alignSelf: "flex-start",
    maxWidth: "60%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: theme.palette.secondary.main,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  inputField: {
    marginRight: theme.spacing(2),
  },
}));

const ChatBot = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input) {
      setMessages([...messages, { user: true, text: input }]);
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
      setMessages([...messages, { user: false, text: data.response }]);
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
      {" "}
      <Paper className={classes.root}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${classes.message} ${
              message.user ? "" : classes.userMessage
            }`}
          >
            {message.user ? "You: " : "ChatBot: "}
            {message.text}
          </div>
        ))}
        <div className={classes.inputContainer}>
          <TextField
            className={classes.inputField}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            label="Type your message here"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </Paper>
    </Box>
  );
};

export default ChatBot;
