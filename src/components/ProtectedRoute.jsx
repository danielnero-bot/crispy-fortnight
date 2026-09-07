import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowRole, redirectTo = "/login" }) {
  const { session, loading } = useAuth();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center text-primary">Loading...</div>;
  }

  if (!session) {
    return <Navigate to={redirectTo} replace />;
  }

  if (allowRole && session.role !== allowRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
