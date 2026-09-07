import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function DashboardPage() {
  const { session, signOut } = useAuth();

  const role = session?.role || "student";

  return (
    <div className="min-h-screen bg-surface px-4 py-10 text-on-surface">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              ACMGS portal
            </p>
            <h1 className="mt-3 font-headline-md text-headline-md text-primary">
              Welcome,{" "}
              {session?.profile?.fullName || session?.user?.email || "User"}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => signOut()}
            className="rounded-xl border border-outline-variant px-4 py-2 text-sm font-semibold text-primary"
          >
            Log out
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {role === "teacher" || role === "admin" ? (
            <Link
              to="/teacher/results"
              className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <p className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-secondary">
                Teacher tools
              </p>
              <h2 className="mt-3 font-headline-sm text-headline-sm text-primary">
                Manage results
              </h2>
              <p className="mt-3 text-on-surface-variant">
                Upload, update, and track student results for each class and
                term.
              </p>
            </Link>
          ) : null}

          {role === "student" || role === "admin" ? (
            <Link
              to="/student/results"
              className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <p className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-secondary">
                Student portal
              </p>
              <h2 className="mt-3 font-headline-sm text-headline-sm text-primary">
                View results
              </h2>
              <p className="mt-3 text-on-surface-variant">
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
