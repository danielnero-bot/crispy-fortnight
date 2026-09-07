import { useState } from "react";
import { getStoredResults, saveResult } from "../lib/resultStore";

const initialForm = {
  studentId: "STD-101",
  studentName: "Amina Okafor",
  subject: "Mathematics",
  term: "First Term",
  session: "2024/2025",
  caScore: 25,
  examScore: 60,
};

export default function TeacherResultsPage() {
  const [formData, setFormData] = useState(initialForm);
  const [results, setResults] = useState(getStoredResults());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextResult = saveResult(formData);
    setResults((current) => [...current, nextResult]);
    setFormData(initialForm);
  };

  return (
    <div className="min-h-screen bg-surface px-4 py-10 text-on-surface">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
            Teacher portal
          </p>
          <h1 className="mt-3 font-headline-md text-headline-md text-primary">
            Update student results
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Student ID</label>
                <input name="studentId" value={formData.studentId} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Student Name</label>
                <input name="studentName" value={formData.studentName} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Term</label>
                <select name="term" value={formData.term} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2">
                  <option>First Term</option>
                  <option>Second Term</option>
                  <option>Third Term</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Session</label>
                <input name="session" value={formData.session} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">CA Score</label>
                <input type="number" name="caScore" value={formData.caScore} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Exam Score</label>
                <input type="number" name="examScore" value={formData.examScore} onChange={handleChange} className="w-full rounded-xl border border-outline-variant px-3 py-2" />
              </div>
            </div>

            <button type="submit" className="mt-6 rounded-xl bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary hover:bg-secondary">
              Save result
            </button>
          </form>

          <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
            <h2 className="mb-4 font-headline-sm text-headline-sm text-primary">Recent entries</h2>
            <div className="max-h-[560px] overflow-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="pb-2 pr-4">Student</th>
                    <th className="pb-2 pr-4">Subject</th>
                    <th className="pb-2 pr-4">Total</th>
                    <th className="pb-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr key={result.id} className="border-b border-outline-variant/60">
                      <td className="py-3 pr-4">{result.studentName}</td>
                      <td className="py-3 pr-4">{result.subject}</td>
                      <td className="py-3 pr-4">{result.total}</td>
                      <td className="py-3">{result.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
