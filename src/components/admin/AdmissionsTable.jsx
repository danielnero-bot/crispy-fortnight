import AdmissionRow from "./AdmissionRow";

const admissions = [
  {
    name: "Chioma Joy Adeleke",
    applicationId: "APP-2025-0891",
    className: "JSS 1",
    category: "Junior Secondary",
    house: "Faith House",
    assessment: "88%",
    assessmentType: "Entrance Exam",
    status: "Interview Pending",
    subStatus: "Interview pending",
    action: "Interview",
  },
  {
    name: "Somtochukwu Amadi",
    applicationId: "APP-2025-0904",
    className: "SSS 1",
    category: "Science",
    house: "Hope House",
    assessment: "9 Distinctions",
    assessmentType: "BECE",
    status: "Docs Verified",
    subStatus: "Ready for approval",
    action: "Approve",
  },
  {
    name: "Kosisochukwu Briggs",
    applicationId: "APP-2025-0772",
    className: "JSS 1",
    category: "Day Scholar",
    house: "Faith House",
    assessment: "92%",
    assessmentType: "Dean's List Award",
    status: "Admitted",
    subStatus: "Enrolled",
    action: "Print",
  },
  {
    name: "Blessing N. Pepple",
    applicationId: "APP-2025-1022",
    className: "SSS 1",
    category: "Arts",
    house: "Inter-Diocese Transfer",
    assessment: "Pending",
    assessmentType: "Archival Transfer",
    status: "Awaiting Transcripts",
    subStatus: "Awaiting transcripts",
    action: "Query",
  },
];

export default function AdmissionsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
            Admissions Review & Candidacy
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Review applicants currently moving through the admission pipeline.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Applicant
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Class
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                House
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Assessment
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {admissions.map((admission) => (
              <AdmissionRow
                key={admission.applicationId}
                admission={admission}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
        <p className="text-xs text-slate-400">
          Showing 4 of 142 pending admissions
        </p>

        <button className="text-xs font-semibold text-[#0b1f3a] hover:underline">
          Export CSV
        </button>
      </div>
    </div>
  );
}
