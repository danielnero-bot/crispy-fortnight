import { CheckCircle2 } from "lucide-react";
import StatCard from "./StatCard";

export default function StatCards({ data }) {
  const students = data?.students || [];
  const admissions = data?.admissions || [];
  const houses = data?.houses || [];
  const fees = data?.fees || [];
  const juniorStudents = students.filter((student) =>
    /^JSS/i.test(student.class_name || ""),
  ).length;
  const seniorStudents = students.filter((student) =>
    /^SSS/i.test(student.class_name || ""),
  ).length;
  const occupied = houses.reduce(
    (total, house) => total + Number(house.occupied || 0),
    0,
  );
  const capacity = houses.reduce(
    (total, house) => total + Number(house.capacity || 0),
    0,
  );
  const paidFees = fees
    .filter((fee) => fee.status === "paid")
    .reduce((total, fee) => total + Number(fee.amount || 0), 0);
  const scheduledFees = fees.reduce(
    (total, fee) => total + Number(fee.amount || 0),
    0,
  );
  const occupancy = capacity ? ((occupied / capacity) * 100).toFixed(1) : "-";
  const liquidity = scheduledFees
    ? ((paidFees / scheduledFees) * 100).toFixed(1)
    : "-";
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {/* Total Students */}
      <StatCard
        title="Total Enrolled Scholars"
        value={students.length.toLocaleString()}
        icon="users"
        trend={{
          value: "+4.2%",
          direction: "up",
        }}
        trendLabel="YoY"
      >
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Junior Sec</p>
            <p className="mt-1 font-semibold text-slate-700">
              {juniorStudents}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Senior Sec</p>
            <p className="mt-1 font-semibold text-slate-700">
              {seniorStudents}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600">
          <CheckCircle2 size={14} />
          Enrollment verified
        </div>
      </StatCard>

      {/* Admissions */}
      <StatCard
        title="Pending Admissions"
        value={admissions.length.toLocaleString()}
        icon="admissions"
        description="2025 Intake"
      >
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Entrance Tests</p>
            <p className="mt-1 font-semibold text-slate-700">
              {
                admissions.filter((item) =>
                  /test/i.test(item.status || item.sub_status || ""),
                ).length
              }
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Interview</p>
            <p className="mt-1 font-semibold text-slate-700">
              {
                admissions.filter((item) =>
                  /interview/i.test(item.status || item.sub_status || ""),
                ).length
              }
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs font-medium text-amber-600">
          {admissions.filter((item) => item.status === "flagged").length}{" "}
          dossiers flagged
        </p>
      </StatCard>

      {/* Boarding */}
      <StatCard
        title="Boarding Occupancy"
        value={`${occupancy}%`}
        icon="boarding"
        description="Current residential capacity"
      >
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-slate-400">Capacity</span>

            <span className="font-semibold text-slate-700">{capacity}</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#0b1f3a]"
              style={{ width: `${occupancy === "-" ? 0 : occupancy}%` }}
            />
          </div>
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-500">
          {houses.map((house) => (
            <span key={house.id}>
              {house.name} {house.occupied}
            </span>
          ))}
        </div>
      </StatCard>

      {/* Bursary */}
      <StatCard
        title="Bursary Liquidity"
        value={`${liquidity}%`}
        icon="bursary"
        description="Financial position"
      >
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Cleared</span>

            <span className="text-sm font-semibold text-slate-700">
              {paidFees.toLocaleString()}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">Scheduled</span>

            <span className="text-sm font-semibold text-slate-700">
              {scheduledFees.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600">
          <CheckCircle2 size={14} />
          Audited
        </div>
      </StatCard>
    </section>
  );
}
