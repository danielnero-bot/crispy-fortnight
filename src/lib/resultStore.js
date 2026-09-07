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
    studentId: "demo-student-101",
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
    studentId: "demo-student-201",
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

const demoStudents = [
  {
    id: "demo-student-101",
    admission_no: "STD-101",
    full_name: "Amina Okafor",
    class_name: "SS2",
  },
  {
    id: "demo-student-201",
    admission_no: "STD-201",
    full_name: "Blessing James",
    class_name: "SS2",
  },
];

export function getGrade(total) {
  if (total >= 70) return "A";
  if (total >= 60) return "B";
  if (total >= 50) return "C";
  if (total >= 40) return "D";
  return "F";
}

export function getRemark(total) {
  if (total >= 70) return "Excellent";
  if (total >= 60) return "Good";
  if (total >= 50) return "Fair";
  return "Needs support";
}

function normalizeResult(result) {
  return {
    id: result.id,
    studentId: result.student_id,
    studentName: result.student_name,
    subject: result.subject,
    term: result.term,
    session: result.session_year,
    caScore: Number(result.ca_score),
    examScore: Number(result.exam_score),
    total: Number(result.total),
    grade: result.grade,
    remark: result.remark,
  };
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
      return data.map(normalizeResult);
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
      return data.map(normalizeResult);
    }
  }

  return getStoredResults();
}

export async function saveResult(formData) {
  const caScore = Number(formData.caScore);
  const examScore = Number(formData.examScore);

  if (!formData.studentId) {
    throw new Error("Please select a student.");
  }

  if (!formData.subject) {
    throw new Error("Please select a subject.");
  }

  if (!formData.term) {
    throw new Error("Please select a term.");
  }

  if (!formData.session) {
    throw new Error("Please select a session.");
  }

  if (caScore < 0 || caScore > 30) {
    throw new Error("CA score must be between 0 and 30.");
  }

  if (examScore < 0 || examScore > 70) {
    throw new Error("Exam score must be between 0 and 70.");
  }

  const total = caScore + examScore;
  const grade = getGrade(total);
  const remark = getRemark(total);
  const normalized = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    studentId: formData.studentId,
    studentName: formData.studentName,
    subject: formData.subject,
    term: formData.term,
    session: formData.session,
    caScore,
    examScore,
    total,
    grade,
    remark,
  };

  if (isSupabaseConfigured && supabase) {
  const payload = {
    student_id: formData.studentId,
    student_name: formData.studentName,
    subject: formData.subject,
    term: formData.term,
    session_year: formData.session,
    ca_score: caScore,
    exam_score: examScore,
    total,
    grade,
    remark,
  };

  const { data, error } = await supabase
    .from("results")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return normalizeResult(data);
}
// Demo/local mode
const allResults = getStoredResults();
const nextResults = [...allResults, normalized];

localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResults));

return normalized;
}

export function getResultsForStudent(studentId) {
  return getStoredResults().filter((result) => result.studentId === studentId);
}

export async function listStudents() {
  if (!isSupabaseConfigured || !supabase) {
    return demoStudents;
  }

  const { data, error } = await supabase
    .from("students")
    .select("*")
    .order("full_name", { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []).map((student) => ({
    id: student.id,
    admission_no: student.admission_no,
    full_name: student.full_name,
    class_name: student.class_name,
  }));
}
