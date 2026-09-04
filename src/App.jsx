import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import BoardingPage from "./pages/BoardingPage";
import StudentLife from "./pages/Student-Life";
import ManagementPage from "./pages/Management";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/management" element={<ManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
