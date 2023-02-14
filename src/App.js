import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import WebUsability from "./Components/WebUsability";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="web" element={<WebUsability />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
