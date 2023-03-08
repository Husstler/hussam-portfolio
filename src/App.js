import "./App.css";
import Navbar from "./Components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import WebUsability from "./Components/WebUsability";
import { Box } from "@mui/system";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavigationBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="web" element={<WebUsability />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
