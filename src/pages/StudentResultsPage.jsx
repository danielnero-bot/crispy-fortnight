import { getResultsForStudent } from "../lib/resultStore";
import { useAuth } from "../context/useAuth";

export default function StudentResultsPage() {
  const { session } = useAuth();
  const studentId = session?.user?.id || "STD-101";
  const results = getResultsForStudent(studentId);

  return (
    <div className="min-h-screen bg-surface px-4 py-10 text-on-surface">
      <div className="mx-auto max-w-5xl">
        <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
          Student portal
        </p>
        <h1 className="mt-3 font-headline-md text-headline-md text-primary">
          My results
        </h1>

        <div className="mt-8 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-surface-container">
              <tr>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Term</th>
                <th className="px-4 py-3">Session</th>
                <th className="px-4 py-3">CA</th>
                <th className="px-4 py-3">Exam</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Remark</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr
                  key={result.id}
                  className="border-t border-outline-variant/60"
                >
                  <td className="px-4 py-3">{result.subject}</td>
                  <td className="px-4 py-3">{result.term}</td>
                  <td className="px-4 py-3">{result.session}</td>
                  <td className="px-4 py-3">{result.caScore}</td>
                  <td className="px-4 py-3">{result.examScore}</td>
                  <td className="px-4 py-3">{result.total}</td>
                  <td className="px-4 py-3">{result.grade}</td>
                  <td className="px-4 py-3">{result.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
