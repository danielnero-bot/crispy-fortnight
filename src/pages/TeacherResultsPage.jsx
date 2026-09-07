import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllResults,
  listStudents,
  saveResult,
} from "../lib/resultStore";

const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Biology",
  "Chemistry",
  "Physics",
  "Government",
  "Economics",
  "Literature",
  "Geography",
  "Computer Science",
];

const initialForm = {
  studentId: "",
  studentName: "",
  subject: "",
  term: "First Term",
  session: "2024/2025",
  caScore: "",
  examScore: "",
};

export default function TeacherResultsPage() {
  const [formData, setFormData] = useState(initialForm);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingResults, setLoadingResults] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setError("");

        const [studentData, resultData] = await Promise.all([
          listStudents(),
          fetchAllResults(),
        ]);

        setStudents(studentData);
        setResults(resultData);
      } catch (err) {
        console.error("Failed to load teacher results data:", err);
        setError(err.message || "Failed to load results.");
      } finally {
        setLoadingStudents(false);
        setLoadingResults(false);
      }
    };

    loadData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "studentId") {
      const selectedStudent = students.find(
        (student) => student.id === value,
      );

      setFormData((current) => ({
        ...current,
        studentId: value,
        studentName: selectedStudent?.full_name || "",
      }));

      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const nextResult = await saveResult(formData);

      setResults((current) => [nextResult, ...current]);

      setSuccess("Result saved successfully.");
      setFormData(initialForm);
    } catch (err) {
      console.error("Failed to save result:", err);
      setError(err.message || "Failed to save result.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-on-surface">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors py-1"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Teacher portal
          </p>

          <h1 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-primary">
            Update student results
          </h1>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-primary/20 bg-primary-container p-4 text-sm text-on-primary-container">
            {success}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-5 sm:p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Student
                </label>

                <select
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  disabled={loadingStudents || saving}
                  required
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                >
                  <option value="">
                    {loadingStudents
                      ? "Loading students..."
                      : "Select student"}
                  </option>

                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.admission_no} — {student.full_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Student Name
                </label>

                <input
                  value={formData.studentName}
                  readOnly
                  placeholder="Student name"
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface-container-low px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Subject
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={saving}
                  required
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                >
                  <option value="">Select subject</option>

                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Term
                </label>

                <select
                  name="term"
                  value={formData.term}
                  onChange={handleChange}
                  disabled={saving}
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                >
                  <option>First Term</option>
                  <option>Second Term</option>
                  <option>Third Term</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Session
                </label>

                <input
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  disabled={saving}
                  required
                  placeholder="2024/2025"
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  CA Score
                </label>

                <input
                  type="number"
                  name="caScore"
                  min="0"
                  max="30"
                  value={formData.caScore}
                  onChange={handleChange}
                  disabled={saving}
                  required
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                />

                <p className="mt-1 text-xs text-on-surface-variant">
                  Maximum: 30
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  Exam Score
                </label>

                <input
                  type="number"
                  name="examScore"
                  min="0"
                  max="70"
                  value={formData.examScore}
                  onChange={handleChange}
                  disabled={saving}
                  required
                  className="w-full min-h-[44px] h-11 rounded-xl border border-outline-variant bg-surface px-3.5 py-2.5 text-base sm:text-sm text-on-surface outline-none focus:border-secondary transition-all"
                />

                <p className="mt-1 text-xs text-on-surface-variant">
                  Maximum: 70
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-surface-container-low p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">
                  Total Score
                </span>

                <span className="text-xl font-semibold text-primary">
                  {(Number(formData.caScore) || 0) +
                    (Number(formData.examScore) || 0)}
                  /100
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={saving || loadingStudents}
              className="mt-6 w-full sm:w-auto min-h-[44px] h-11 px-6 inline-flex items-center justify-center rounded-xl bg-primary text-xs font-semibold uppercase tracking-[0.12em] text-on-primary hover:bg-secondary transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save result"}
            </button>
          </form>

          <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-5 sm:p-6 shadow-sm">
            <h2 className="mb-4 font-display text-lg sm:text-xl font-bold text-primary">
              Recent entries
            </h2>

            {loadingResults ? (
              <p className="text-sm text-on-surface-variant">
                Loading results...
              </p>
            ) : results.length === 0 ? (
              <p className="text-sm text-on-surface-variant">
                No results have been entered yet.
              </p>
            ) : (
              <div className="w-full overflow-x-auto max-h-[500px]">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-outline-variant text-xs font-semibold uppercase tracking-wider text-primary">
                      <th className="pb-3 pr-4">Student</th>
                      <th className="pb-3 pr-4">Subject</th>
                      <th className="pb-3 pr-4">Total</th>
                      <th className="pb-3">Grade</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-outline-variant/40">
                    {results.map((result) => (
                      <tr
                        key={result.id}
                        className="hover:bg-surface/50 transition-colors"
                      >
                        <td className="py-3 pr-4 font-medium text-primary">
                          {result.studentName}
                        </td>

                        <td className="py-3 pr-4 text-on-surface-variant">
                          {result.subject}
                        </td>

                        <td className="py-3 pr-4 font-semibold text-primary">
                          {result.total}
                        </td>

                        <td className="py-3">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                            {result.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

