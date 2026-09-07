import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function DashboardPage() {
  const { session, signOut } = useAuth();

  const role = session?.role || "student";

  return (
    <div className="min-h-screen bg-surface px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-on-surface">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors py-1"
          >
            ← Back to School Website
          </Link>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/50">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              ACMGS Portal
            </p>
            <h1 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-primary break-words">
              Welcome,{" "}
              {session?.profile?.fullName || session?.user?.email || "User"}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => signOut()}
            className="w-full sm:w-auto min-h-[44px] h-11 px-5 inline-flex items-center justify-center rounded-xl border border-outline-variant bg-surface-container-lowest text-sm font-semibold text-primary hover:bg-surface-container transition-colors"
          >
            Log out
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {role === "teacher" || role === "admin" ? (
            <Link
              to="/teacher/results"
              className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Teacher tools
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-primary">
                Manage results
              </h2>
              <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                Upload, update, and track student results for each class and
                term.
              </p>
            </Link>
          ) : null}

          {role === "student" || role === "admin" ? (
            <Link
              to="/student/results"
              className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Student portal
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-primary">
                View results
              </h2>
              <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                Check academic performance, grades, remarks, and term-by-term
                results.
              </p>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
