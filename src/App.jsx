import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/Student-Life";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TeacherResultsPage from "./pages/TeacherResultsPage";
import StudentResultsPage from "./pages/StudentResultsPage";
import CheckResultPage from "./pages/CheckResultPagee";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdmissionsManagementPage from "./pages/admin/AdmissionsManagementPage";
import StudentManagementPage from "./pages/admin/StudentManagementPage";
import AcademicManagementPage from "./pages/admin/AcademicManagementPage";
import BoardingManagementPage from "./pages/admin/BoardingManagementPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/boarding"
            element={<Navigate to="/student-life" replace />}
          />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/check-result" element={<CheckResultPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin/admissions"
            element={<AdmissionsManagementPage />}
          />
          <Route path="/admin/students" element={<StudentManagementPage />} />
          <Route path="/admin/academics" element={<AcademicManagementPage />} />
          <Route path="/admin/boarding" element={<BoardingManagementPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
