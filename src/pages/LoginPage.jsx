import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { signIn, session } = useAuth();
  const [email, setEmail] = useState("teacher@acmgs.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (session) {
    if (session.role === "teacher") {
      navigate("/teacher/results", { replace: true });
    } else if (session.role === "student") {
      navigate("/student/results", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn({ email, password });

      if (result?.role === "teacher") {
        navigate("/teacher/results", { replace: true });
      } else if (result?.role === "student") {
        navigate("/student/results", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (submitError) {
      setError(submitError.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(0,35,71,0.08)]">
        <p className="mb-3 text-center font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
          ACMGS Portal
        </p>
        <h1 className="mb-6 text-center font-headline-md text-headline-md text-primary">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-body-md text-body-md text-primary">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-outline-variant bg-white px-4 py-3 text-on-surface outline-none focus:border-secondary"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-body-md text-body-md text-primary">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-outline-variant bg-white px-4 py-3 text-on-surface outline-none focus:border-secondary"
              required
            />
          </div>

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary transition-colors hover:bg-secondary"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 rounded-xl bg-surface-container p-4 text-sm text-on-surface-variant">
          <p className="font-semibold text-primary">Demo accounts</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Teacher: teacher@acmgs.com / demo123</li>
            <li>Student: student@acmgs.com / demo123</li>
            <li>Admin: admin@acmgs.com / demo123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
