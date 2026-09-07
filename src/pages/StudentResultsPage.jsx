import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listResultsForStudent } from "../lib/resultStore";
import { useAuth } from "../context/useAuth";

export default function StudentResultsPage() {
  const { session } = useAuth();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadResults() {
      if (!session?.student?.id) {
        setResults([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await listResultsForStudent(session.student.id);
        setResults(data);
      } catch (err) {
        console.error("Failed to load results:", err);
        setError("Unable to load your results.");
      } finally {
        setLoading(false);
      }
    }

    loadResults();
  }, [session?.student?.id]);

  return (
    <div className="min-h-screen bg-surface px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-on-surface">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors py-1"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Student portal
        </p>

        <h1 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-primary">
          My results
        </h1>

        {loading && (
          <div className="mt-8 rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-8 text-center">
            <p className="text-sm text-on-surface-variant">
              Loading your results...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="mt-8 rounded-2xl border border-error-container bg-error-container/30 p-6">
            <p className="text-sm font-medium text-on-error-container">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="mt-8 rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-8 text-center">
            <p className="font-semibold text-primary">
              No results available yet.
            </p>

            <p className="mt-2 text-sm text-on-surface-variant">
              Your results will appear here once they have been uploaded.
            </p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <>
            <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-outline-variant/70 bg-surface-container-lowest shadow-sm">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left text-sm whitespace-nowrap">
                  <thead className="bg-surface-container/70 border-b border-outline-variant/60 text-xs font-semibold uppercase tracking-wider text-primary">
                    <tr>
                      <th className="px-4 py-3.5">Subject</th>
                      <th className="px-4 py-3.5">Term</th>
                      <th className="px-4 py-3.5">Session</th>
                      <th className="px-4 py-3.5 text-center">CA</th>
                      <th className="px-4 py-3.5 text-center">Exam</th>
                      <th className="px-4 py-3.5 text-center">Total</th>
                      <th className="px-4 py-3.5 text-center">Grade</th>
                      <th className="px-4 py-3.5">Remark</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-outline-variant/40">
                    {results.map((result) => (
                      <tr
                        key={result.id}
                        className="hover:bg-surface/50 transition-colors"
                      >
                        <td className="px-4 py-3.5 font-medium text-primary">
                          {result.subject}
                        </td>

                        <td className="px-4 py-3.5 text-on-surface-variant">
                          {result.term}
                        </td>

                        <td className="px-4 py-3.5 text-on-surface-variant">
                          {result.session}
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          {result.caScore}
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          {result.examScore}
                        </td>

                        <td className="px-4 py-3.5 text-center font-semibold text-primary">
                          {result.total}
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                            {result.grade}
                          </span>
                        </td>

                        <td className="px-4 py-3.5 text-secondary font-medium">
                          {result.remark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-3 text-xs text-on-surface-variant sm:hidden">
              ⇄ Scroll horizontally on the table to view all columns
            </p>
          </>
        )}
      </div>
    </div>
  );
}
