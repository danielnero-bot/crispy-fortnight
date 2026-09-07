import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import BoardingPage from "./pages/BoardingPage";
import StudentLife from "./pages/Student-Life";
import ManagementPage from "./pages/Management";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TeacherResultsPage from "./pages/TeacherResultsPage";
import StudentResultsPage from "./pages/StudentResultsPage";
import CheckResultPage from "./pages/CheckResultPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/boarding" element={<BoardingPage />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/check-result" element={<CheckResultPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher/results"
            element={
              <ProtectedRoute allowRoles={["teacher", "admin"]}>
                <TeacherResultsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/results"
            element={
              <ProtectedRoute allowRoles={["student", "admin"]}>
                <StudentResultsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
