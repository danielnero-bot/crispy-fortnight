import { useState } from "react";
import { Link } from "react-router-dom";
import { checkResultsByCode } from "../lib/resultStore";

export default function CheckResultPage() {
  const [resultCode, setResultCode] = useState("");
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setStudent(null);
    setResults([]);

    try {
      setLoading(true);

      const data = await checkResultsByCode(resultCode);

      setStudent(data.student);
      setResults(data.results);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to find your result.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-surface px-4 py-8 text-on-surface sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary"
          >
            ← Back to Home
          </Link>
        </div>

        {!student && (
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Student portal
              </p>

              <h1 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                Check Your Result
              </h1>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-on-surface-variant">
                Enter the unique result code provided by your school to
                view your academic results.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-6 shadow-sm sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="resultCode"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Result Code
                  </label>

                  <input
                    id="resultCode"
                    type="text"
                    value={resultCode}
                    onChange={(event) =>
                      setResultCode(event.target.value.toUpperCase())
                    }
                    placeholder="e.g. ACMGS-8F42KD"
                    autoComplete="off"
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3.5 font-mono text-sm uppercase outline-none transition-colors placeholder:font-sans placeholder:normal-case focus:border-primary"
                    required
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-error-container bg-error-container/30 px-4 py-3">
                    <p className="text-sm font-medium text-on-error-container">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Checking..." : "Check Result"}
                </button>
              </form>

              <div className="mt-6 rounded-xl bg-surface-container p-4">
                <p className="text-xs leading-5 text-on-surface-variant">
                  Your result code is unique to you. Keep it safe and
                  do not share it publicly.
                </p>
              </div>
            </div>
          </div>
        )}

        {student && (
          <>
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  Student result
                </p>

                <h1 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                  {student.full_name}
                </h1>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-on-surface-variant">
                  <span>
                    Admission No:{" "}
                    <strong className="text-primary">
                      {student.admission_no}
                    </strong>
                  </span>

                  <span>
                    Class:{" "}
                    <strong className="text-primary">
                      {student.class_name}
                    </strong>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStudent(null);
                  setResults([]);
                  setResultCode("");
                  setError("");
                }}
                className="self-start rounded-xl border border-outline-variant px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-surface-container"
              >
                Check Another
              </button>
            </div>

            <div className="mb-6 rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Result Code
              </p>

              <p className="mt-1 font-mono text-lg font-bold text-primary">
                {student.result_code}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-8 text-center shadow-sm">
                <p className="font-semibold text-primary">
                  No results available yet.
                </p>

                <p className="mt-2 text-sm text-on-surface-variant">
                  Your school has not uploaded any results for this
                  student yet.
                </p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-outline-variant/70 bg-surface-container-lowest shadow-sm">
                <div className="w-full overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                    <thead className="border-b border-outline-variant/60 bg-surface-container/70">
                      <tr className="text-xs font-semibold uppercase tracking-wider text-primary">
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
                      {results.map((result, index) => (
                        <tr
                          key={`${result.subject}-${result.term}-${result.session}-${index}`}
                          className="transition-colors hover:bg-surface/50"
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

                          <td className="px-4 py-3.5 text-center font-bold text-primary">
                            {result.total}
                          </td>

                          <td className="px-4 py-3.5 text-center">
                            <span className="inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-bold bg-primary/10 text-primary">
                              {result.grade}
                            </span>
                          </td>

                          <td className="px-4 py-3.5 font-medium text-secondary">
                            {result.remark}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}