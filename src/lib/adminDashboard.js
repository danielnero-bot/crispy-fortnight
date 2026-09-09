import { supabase } from "./supabase";

const emptyDashboard = {
  students: [],
  admissions: [],
  houses: [],
  benchmarks: [],
  diaryEntries: [],
  securityChecks: [],
  alerts: [],
  activity: [],
  attendance: null,
  fees: null,
};

async function readTable(table, options = {}) {
  if (!supabase) return [];

  let query = supabase.from(table).select(options.select || "*");
  if (options.order) query = query.order(options.order, { ascending: false });
  if (options.limit) query = query.limit(options.limit);

  const { data, error } = await query;
  if (error) {
    console.error(`Failed to load ${table}:`, error);
    return [];
  }

  return data || [];
}

export async function loadAdminDashboard() {
  if (!supabase) return emptyDashboard;

  const [
    students,
    admissions,
    houses,
    benchmarks,
    diaryEntries,
    securityChecks,
    alerts,
    activity,
    attendance,
    fees,
  ] = await Promise.all([
    readTable("students"),
    readTable("admissions", { order: "created_at", limit: 20 }),
    readTable("boarding_houses", { order: "name" }),
    readTable("academic_benchmarks", { order: "created_at" }),
    readTable("academic_diary", { order: "scheduled_for", limit: 10 }),
    readTable("security_audits", { order: "created_at", limit: 10 }),
    readTable("admin_alerts", { order: "created_at", limit: 10 }),
    readTable("admin_activity_log", { order: "created_at", limit: 10 }),
    readTable("attendance_summaries", { order: "recorded_on", limit: 1 }),
    readTable("fee_payments", { order: "created_at", limit: 500 }),
  ]);

  return {
    students,
    admissions,
    houses,
    benchmarks,
    diaryEntries,
    securityChecks,
    alerts,
    activity,
    attendance: attendance[0] || null,
    fees,
  };
}
