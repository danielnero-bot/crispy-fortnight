import AdmissionRow from "./AdmissionRow";

export default function AdmissionsTable({ admissions = [] }) {
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
            {admissions.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-8 text-center text-sm text-slate-500"
                >
                  No admissions found.
                </td>
              </tr>
            ) : (
              admissions.map((record) => {
                const admission = {
                  ...record,
                  name: record.applicant_name,
                  applicationId: record.application_id,
                  className: record.class_name,
                  assessmentType: record.assessment_type,
                  subStatus: record.sub_status,
                  action: record.action || "Review",
                };
                return <AdmissionRow key={record.id} admission={admission} />;
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
        <p className="text-xs text-slate-400">
          Showing {admissions.length} admissions
        </p>

        <button className="text-xs font-semibold text-[#0b1f3a] hover:underline">
          Export CSV
        </button>
      </div>
    </div>
  );
}
