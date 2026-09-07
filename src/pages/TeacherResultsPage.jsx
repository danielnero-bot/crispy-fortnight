import { useEffect, useState } from "react";
import { fetchAllResults, listStudents, saveResult } from "../lib/resultStore";

const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Biology",
  "Chemistry",
  "Physics",
  "Economics",
  "Government",
  "Literature in English",
  "Geography",
  "Computer Science",
  "Civic Education",
  "Christian Religious Studies",
];

export default function TeacherResultsPage() {
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    subject: "",
    term: "First Term",
    session: "2024/2025",
    caScore: "",
    examScore: "",
  });

  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingResults, setLoadingResults] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setError("");

        const [studentData, resultData] = await Promise.all([
          listStudents(),
          fetchAllResults(),
        ]);

        setStudents(studentData);
        setResults(resultData);
      } catch (err) {
        console.error(err);
        setError("Failed to load students or results.");
      } finally {
        setLoadingStudents(false);
        setLoadingResults(false);
      }
    }

    loadData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "studentId") {
      const selectedStudent = students.find(
        (student) => student.id === value
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
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    try {
      setSaving(true);

      const savedResult = await saveResult(formData);

      setResults((current) => [savedResult, ...current]);

      setSuccess(
        `Result uploaded successfully for ${formData.studentName}.`
      );

      setFormData((current) => ({
        ...current,
        subject: "",
        caScore: "",
        examScore: "",
      }));
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to upload result.");
    } finally {
      setSaving(false);
    }
  }

  const caScore = Number(formData.caScore) || 0;
  const examScore = Number(formData.examScore) || 0;
  const total = caScore + examScore;

  return (
    <div className="min-h-screen bg-surface px-4 py-8 text-on-surface sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Teacher portal
          </p>

          <h1 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
            Manage Results
          </h1>

          <p className="mt-2 text-sm text-on-surface-variant">
            Upload and manage student academic results.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-error-container bg-error-container/30 px-4 py-3">
            <p className="text-sm font-medium text-on-error-container">
              {error}
            </p>
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-primary-container bg-primary-container/30 px-4 py-3">
            <p className="text-sm font-medium text-on-primary-container">
              {success}
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* Upload form */}
          <section className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-primary">
              Upload Result
            </h2>

            <p className="mt-1 text-sm text-on-surface-variant">
              Select a student and enter their scores.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Student */}
              <div>
                <label
                  htmlFor="studentId"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Student
                </label>

                <select
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  disabled={loadingStudents || saving}
                  className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                  required
                >
                  <option value="">
                    {loadingStudents
                      ? "Loading students..."
                      : "Select student"}
                  </option>

                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.full_name} — {student.admission_no}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result Code */}
              {formData.studentId && (
                <div className="rounded-xl bg-surface-container p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Student Result Code
                  </p>

                  <p className="mt-1 font-mono text-lg font-bold text-primary">
                    {
                      students.find(
                        (student) =>
                          student.id === formData.studentId
                      )?.result_code
                    }
                  </p>

                  <p className="mt-1 text-xs text-on-surface-variant">
                    Give this code to the student so they can check
                    their results.
                  </p>
                </div>
              )}

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={saving}
                  className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                  required
                >
                  <option value="">Select subject</option>

                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Term */}
              <div>
                <label
                  htmlFor="term"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Term
                </label>

                <select
                  id="term"
                  name="term"
                  value={formData.term}
                  onChange={handleChange}
                  disabled={saving}
                  className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                  required
                >
                  <option value="First Term">First Term</option>
                  <option value="Second Term">Second Term</option>
                  <option value="Third Term">Third Term</option>
                </select>
              </div>

              {/* Session */}
              <div>
                <label
                  htmlFor="session"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Academic Session
                </label>

                <select
                  id="session"
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  disabled={saving}
                  className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                  required
                >
                  <option value="2024/2025">2024/2025</option>
                  <option value="2025/2026">2025/2026</option>
                  <option value="2026/2027">2026/2027</option>
                </select>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="caScore"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    CA Score
                  </label>

                  <input
                    id="caScore"
                    name="caScore"
                    type="number"
                    min="0"
                    max="30"
                    value={formData.caScore}
                    onChange={handleChange}
                    disabled={saving}
                    placeholder="0–30"
                    className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="examScore"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Exam Score
                  </label>

                  <input
                    id="examScore"
                    name="examScore"
                    type="number"
                    min="0"
                    max="70"
                    value={formData.examScore}
                    onChange={handleChange}
                    disabled={saving}
                    placeholder="0–70"
                    className="w-full rounded-xl border border-outline-variant bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Total */}
              <div className="rounded-xl bg-primary/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-secondary">
                    Total Score
                  </span>

                  <span className="text-2xl font-bold text-primary">
                    {total}
                    <span className="ml-1 text-sm font-normal text-secondary">
                      / 100
                    </span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={saving || loadingStudents}
                className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Uploading..." : "Upload Result"}
              </button>
            </form>
          </section>

          {/* Results */}
          <section className="min-w-0">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-primary">
                Recent Results
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Results that have been uploaded.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-outline-variant/70 bg-surface-container-lowest shadow-sm">
              {loadingResults ? (
                <div className="p-8 text-center">
                  <p className="text-sm text-on-surface-variant">
                    Loading results...
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="font-semibold text-primary">
                    No results uploaded yet.
                  </p>

                  <p className="mt-1 text-sm text-on-surface-variant">
                    Uploaded results will appear here.
                  </p>
                </div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full min-w-[750px] border-collapse text-left text-sm">
                    <thead className="border-b border-outline-variant/60 bg-surface-container/70">
                      <tr className="text-xs font-semibold uppercase tracking-wider text-primary">
                        <th className="px-4 py-3">Student</th>
                        <th className="px-4 py-3">Subject</th>
                        <th className="px-4 py-3">Term</th>
                        <th className="px-4 py-3 text-center">CA</th>
                        <th className="px-4 py-3 text-center">Exam</th>
                        <th className="px-4 py-3 text-center">Total</th>
                        <th className="px-4 py-3 text-center">Grade</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-outline-variant/40">
                      {results.map((result) => (
                        <tr
                          key={result.id}
                          className="hover:bg-surface/50"
                        >
                          <td className="px-4 py-3">
                            <div>
                              <p className="font-semibold text-primary">
                                {result.studentName}
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-3">
                            {result.subject}
                          </td>

                          <td className="px-4 py-3 text-on-surface-variant">
                            {result.term}
                          </td>

                          <td className="px-4 py-3 text-center">
                            {result.caScore}
                          </td>

                          <td className="px-4 py-3 text-center">
                            {result.examScore}
                          </td>

                          <td className="px-4 py-3 text-center font-bold text-primary">
                            {result.total}
                          </td>

                          <td className="px-4 py-3 text-center">
                            <span className="font-bold text-primary">
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
          </section>
        </div>
      </div>
    </div>
  );
}
