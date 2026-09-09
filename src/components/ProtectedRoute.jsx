import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function getRouteForRole(role) {
  if (role === "teacher") return "/teacher/results";
  if (role === "student") return "/student/results";
  if (role === "admin") return "/admin";
  return "/dashboard";
}

export default function ProtectedRoute({
  children,
  allowRole,
  allowRoles,
  redirectTo = "/login",
}) {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to={redirectTo} replace />;
  }

  const roles = allowRoles || (allowRole ? [allowRole] : null);

  if (roles && !roles.includes(session.role)) {
    return <Navigate to={getRouteForRole(session.role)} replace />;
  }

  return children;
}
