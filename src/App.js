import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebUsability from "./Components/WebUsability";
import { Box } from "@mui/system";
import NavigationBar from "./Components/NavigationBar";
import FlappyBird from "./Components/FlappyBird";
import SnakeGame from "./Components/SnakeGame";
import Loading from "./Components/Loading";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Box  className="app-container" sx={{ maxWidth: "100%" }}>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/web" element={<WebUsability />} />
            <Route path="/flappybird" element={<FlappyBird />} />
            <Route path="/snakeGame" element={<SnakeGame />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
