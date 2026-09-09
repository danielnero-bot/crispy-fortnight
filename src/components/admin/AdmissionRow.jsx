import {
  MessageSquare,
  CheckCircle2,
  Clock3,
  Printer,
  FileQuestion,
} from "lucide-react";

const statusStyles = {
  "Interview Pending": "bg-amber-50 text-amber-700",
  "Docs Verified": "bg-blue-50 text-blue-700",
  Admitted: "bg-emerald-50 text-emerald-700",
  "Awaiting Transcripts": "bg-slate-100 text-slate-600",
};

function StatusBadge({ status }) {
  const Icon =
    status === "Admitted"
      ? CheckCircle2
      : status === "Interview Pending"
      ? Clock3
      : status === "Awaiting Transcripts"
      ? FileQuestion
      : CheckCircle2;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon size={13} />
      {status}
    </span>
  );
}

export default function AdmissionRow({ admission }) {
  const handleAction = () => {
    if (admission.action === "Interview") {
      alert(`Opening interview for ${admission.name}`);
    }

    if (admission.action === "Approve") {
      alert(`Approving admission for ${admission.name}`);
    }

    if (admission.action === "Query") {
      alert(`Opening query for ${admission.name}`);
    }

    if (admission.action === "Print") {
      window.print();
    }
  };

  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70">
      {/* Applicant */}
      <td className="px-5 py-4">
        <div>
          <p className="font-semibold text-slate-800">
            {admission.name}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {admission.applicationId}
          </p>
        </div>
      </td>

      {/* Class */}
      <td className="px-5 py-4">
        <p className="text-sm font-medium text-slate-700">
          {admission.className}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {admission.category}
        </p>
      </td>

      {/* House */}
      <td className="px-5 py-4">
        <span className="text-sm text-slate-600">
          {admission.house}
        </span>
      </td>

      {/* Assessment */}
      <td className="px-5 py-4">
        <p className="text-sm font-semibold text-slate-700">
          {admission.assessment}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {admission.assessmentType}
        </p>
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <StatusBadge status={admission.status} />

        <p className="mt-2 text-xs text-slate-400">
          {admission.subStatus}
        </p>
      </td>

      {/* Action */}
      <td className="px-5 py-4 text-right">
        <button
          onClick={handleAction}
          className="
            inline-flex items-center gap-2 rounded-lg
            border border-slate-200 px-3 py-2
            text-xs font-semibold text-slate-700
            transition hover:border-[#0b1f3a]
            hover:bg-[#0b1f3a] hover:text-white
          "
        >
          {admission.action === "Interview" && (
            <MessageSquare size={14} />
          )}

          {admission.action === "Approve" && (
            <CheckCircle2 size={14} />
          )}

          {admission.action === "Query" && (
            <FileQuestion size={14} />
          )}

          {admission.action === "Print" && (
            <Printer size={14} />
          )}

          {admission.action}
        </button>
      </td>
    </tr>
  );
}