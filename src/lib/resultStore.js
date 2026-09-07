import { isSupabaseConfigured, supabase } from "./supabase";

const STORAGE_KEY = "acmgs-results";

const seedResults = [
  {
    id: "r1",
    studentId: "demo-student-101",
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
    result_code: "ACMGS-DEMO01",
  },
  {
    id: "demo-student-201",
    admission_no: "STD-201",
    full_name: "Blessing James",
    class_name: "SS2",
    result_code: "ACMGS-DEMO02",
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

function getStoredResults() {
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

    if (error) {
      console.error("Failed to load student results:", error);
      throw error;
    }

    return (data || []).map(normalizeResult);
  }

  return getStoredResults().filter(
    (result) => result.studentId === studentId
  );
}

export async function fetchAllResults() {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("results")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load results:", error);
      throw error;
    }

    return (data || []).map(normalizeResult);
  }

  return getStoredResults();
}

export async function saveResult(formData) {
  const caScore = Number(formData.caScore);
  const examScore = Number(formData.examScore);

  if (!formData.studentId) {
    throw new Error("Please select a student.");
  }

  if (!formData.studentName) {
    throw new Error("Student name is required.");
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

  if (Number.isNaN(caScore) || caScore < 0 || caScore > 30) {
    throw new Error("CA score must be between 0 and 30.");
  }

  if (Number.isNaN(examScore) || examScore < 0 || examScore > 70) {
    throw new Error("Exam score must be between 0 and 70.");
  }

  const total = caScore + examScore;
  const grade = getGrade(total);
  const remark = getRemark(total);

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
      console.error("Supabase insert failed:", error);
      throw error;
    }

    return normalizeResult(data);
  }

  const normalized = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),
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

  const allResults = getStoredResults();
  const nextResults = [...allResults, normalized];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(nextResults)
  );

  return normalized;
}

export async function listStudents() {
  if (!isSupabaseConfigured || !supabase) {
    return demoStudents;
  }

  const { data, error } = await supabase
    .from("students")
    .select(
      "id, admission_no, full_name, class_name, result_code"
    )
    .order("full_name", { ascending: true });

  if (error) {
    console.error("Failed to load students:", error);
    throw error;
  }

  return data || [];
}

export async function findStudentByResultCode(resultCode) {
  const normalizedCode = resultCode?.trim().toUpperCase();

  if (!normalizedCode) {
    throw new Error("Please enter your result code.");
  }

  if (isSupabaseConfigured && supabase) {
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select(
        "id, admission_no, full_name, class_name, result_code"
      )
      .eq("result_code", normalizedCode)
      .maybeSingle();

    if (studentError) {
      console.error("Failed to find student:", studentError);
      throw studentError;
    }

    if (!student) {
      throw new Error("Invalid result code.");
    }

    const { data: results, error: resultsError } = await supabase
      .from("results")
      .select("*")
      .eq("student_id", student.id)
      .order("created_at", { ascending: false });

    if (resultsError) {
      console.error("Failed to load student results:", resultsError);
      throw resultsError;
    }

    return {
      student,
      results: (results || []).map(normalizeResult),
    };
  }

  const student = demoStudents.find(
    (item) => item.result_code === normalizedCode
  );

  if (!student) {
    throw new Error("Invalid result code.");
  }

  const results = getStoredResults().filter(
    (result) => result.studentId === student.id
  );

  return {
    student,
    results,
  };
}


export async function checkResultsByCode(resultCode) {
  const normalizedCode = resultCode?.trim().toUpperCase();

  if (!normalizedCode) {
    throw new Error("Please enter your result code.");
  }

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.rpc(
      "get_results_by_code",
      {
        p_result_code: normalizedCode,
      }
    );

    if (error) {
      console.error("Result lookup failed:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error("No student was found with that result code.");
    }

    const student = {
      id: data[0].student_id,
      admission_no: data[0].admission_no,
      full_name: data[0].student_name,
      class_name: data[0].class_name,
      result_code: data[0].result_code,
    };

    const results = data
      .filter((row) => row.subject)
      .map((row) => ({
        studentId: row.student_id,
        studentName: row.student_name,
        subject: row.subject,
        term: row.term,
        session: row.session_year,
        caScore: Number(row.ca_score),
        examScore: Number(row.exam_score),
        total: Number(row.total),
        grade: row.grade,
        remark: row.remark,
      }));

    return {
      student,
      results,
    };
  }

  const student = demoStudents.find(
    (item) => item.result_code === normalizedCode
  );

  if (!student) {
    throw new Error("No student was found with that result code.");
  }

  const results = getStoredResults().filter(
    (result) => result.studentId === student.id
  );

  return {
    student,
    results,
  };
}