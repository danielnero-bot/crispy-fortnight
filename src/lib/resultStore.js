import { isSupabaseConfigured, supabase } from "./supabase";

const STORAGE_KEY = "acmgs-results";

const seedResults = [
  {
    id: "r1",
    studentId: "STD-101",
    studentName: "Amina Okafor",
    subject: "Mathematics",
    term: "First Term",
    session: "2024/2025",
    caScore: 26,
    examScore: 64,
    total: 90,
    grade: "A",
    remark: "Excellent",
  },
  {
    id: "r2",
    studentId: "STD-101",
    studentName: "Amina Okafor",
    subject: "English Language",
    term: "First Term",
    session: "2024/2025",
    caScore: 22,
    examScore: 58,
    total: 80,
    grade: "A",
    remark: "Very Good",
  },
  {
    id: "r3",
    studentId: "STD-201",
    studentName: "Blessing James",
    subject: "Biology",
    term: "First Term",
    session: "2024/2025",
    caScore: 18,
    examScore: 44,
    total: 62,
    grade: "B",
    remark: "Good",
  },
];

function calculateGrade(total) {
  if (total >= 70) return "A";
  if (total >= 60) return "B";
  if (total >= 50) return "C";
  if (total >= 40) return "D";
  return "F";
}

function calculateRemark(total) {
  if (total >= 70) return "Excellent";
  if (total >= 60) return "Good";
  if (total >= 50) return "Fair";
  return "Needs support";
}

export function getStoredResults() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedResults;
  } catch {
    return seedResults;
  }
}

export async function listResultsForStudent(studentId) {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("results")
      .select("*")
      .eq("student_id", studentId)
      .order("created_at", { ascending: false });

    if (!error && data) {
      return data;
    }
  }

  return getResultsForStudent(studentId);
}

export async function fetchAllResults() {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("results")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      return data;
    }
  }

  return getStoredResults();
}

export function saveResult(formData) {
  const total = Number(formData.caScore) + Number(formData.examScore);
  const normalized = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    studentId: formData.studentId,
    studentName: formData.studentName,
    subject: formData.subject,
    term: formData.term,
    session: formData.session,
    caScore: Number(formData.caScore),
    examScore: Number(formData.examScore),
    total,
    grade: calculateGrade(total),
    remark: calculateRemark(total),
  };

  if (isSupabaseConfigured && supabase) {
    const payload = {
      student_id: formData.studentId,
      student_name: formData.studentName,
      subject: formData.subject,
      term: formData.term,
      session_year: formData.session,
      ca_score: Number(formData.caScore),
      exam_score: Number(formData.examScore),
      total,
      grade: normalized.grade,
      remark: normalized.remark,
    };

    supabase
      .from("results")
      .insert(payload)
      .then(({ error }) => {
        if (error) {
          console.error("Supabase insert failed:", error);
        }
      });
  }

  const allResults = getStoredResults();
  const nextResults = [...allResults, normalized];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResults));
  return normalized;
}

export function getResultsForStudent(studentId) {
  return getStoredResults().filter((result) => result.studentId === studentId);
}
