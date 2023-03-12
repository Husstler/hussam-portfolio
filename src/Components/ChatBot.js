/*import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  Avatar,
  TextField,
  Grid,
} from "@material-ui/core";
import { Chat as ChatIcon, Mood as MoodIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: 600,
    margin: theme.spacing(2),
  },
  avatar: {
    marginBottom: theme.spacing(2),
    width: 100,
    height: 100,
  },
  chatBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: "#f2f2f2",
    borderRadius: theme.spacing(2),
    maxWidth: 500,
  },
  input: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ChatBot = () => {
  const classes = useStyles();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [botState, setBotState] = useState("waiting");

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (buttonText) => {
    setInputValue(buttonText);
    handleUserMessage(buttonText);
  };

  const handleUserMessage = (messageText) => {
    setBotState("thinking");

    setTimeout(() => {
      const newMessages = [
        ...messages,
        { text: messageText, author: "user" },
      ];
      setMessages(newMessages);

      const botResponse = getBotResponse(messageText);
      const newBotMessages = [
        ...newMessages,
        { text: botResponse, author: "bot" },
      ];
      setMessages(newBotMessages);

      setBotState("idle");
    }, 1500);
  };

  const getBotResponse = (messageText) => {
    switch (messageText) {
      case "Hello":
        return "Hi there! How can I help you today?";
      case "How are you?":
        return "I'm doing well, thank you for asking!";
      case "What is your name?":
        return "My name is ChatBot. Nice to meet you!";
      default:
        return "I'm sorry, I don't understand. Can you please try again?";
    }
  };

  let botIcon;

  switch (botState) {
    case "thinking":
      botIcon = <MoodIcon />;
      break;
    case "talking":
      botIcon = <ChatIcon />;
      break;
    default:
      botIcon = <Avatar alt="Bot" src="bot_idle.png" className={classes.avatar} />;
  }

  return(<div className={classes.root}>
    <Container className={classes.container}>
      {botIcon}
      <div className={classes.chatBox}>
        {messages.map((message, index) => (
          <Typography key={index} variant="body1">
            {message.author === "bot" ? "ChatBot: " : "You: "}
            {message.text}
          </Typography>
        ))}
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Type your message here"
            variant="outlined"
            value={inputValue}
            onChange={handleInputValueChange}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick("Hello")}
            className={classes.button}
            disabled={botState === "thinking"}
          >
            Hello
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick("How are you?")}
            className={classes.button}
            disabled={botState === "thinking"}
          >
            How are you?
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick("What is your name?")}
            className={classes.button}
            disabled={botState === "thinking"}
          >
            What is your name?
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick("I have a question.")}
            className={classes.button}
            disabled={botState === "thinking"}
          >
            I have a question.
          </Button>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
  };
  
  export default ChatBot;
  
*/