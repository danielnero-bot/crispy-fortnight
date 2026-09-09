import { useEffect, useMemo, useState } from "react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { AuthContext } from "./auth-context";

const DEMO_USERS = {
  "teacher@acmgs.com": {
    name: "Teacher Demo",
    role: "teacher",
  },
  "student@acmgs.com": {
    name: "Amina Okafor",
    role: "student",
    student: {
      id: "demo-student-101",
      admission_no: "STD-101",
      full_name: "Amina Okafor",
      class_name: "SS2",
    },
  },
  "admin@acmgs.com": {
    name: "Admin Demo",
    role: "admin",
  },
};

function normalizeRole(role) {
  return String(role ?? "")
    .trim()
    .toLowerCase();
}

function readStoredSession() {
  try {
    const saved = localStorage.getItem("acmgs-demo-session");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readStoredSession());
  const [loading, setLoading] = useState(() =>
    Boolean(isSupabaseConfigured && supabase),
  );

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      return undefined;
    }

    const setup = async () => {
      try {
        const {
          data: { session: activeSession },
        } = await supabase.auth.getSession();

        if (!activeSession) {
          setSession(null);
          setLoading(false);
          return;
        }

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", activeSession.user.id)
          .single();

        if (profileError) {
          console.error("Failed to load profile:", profileError);
          setSession(null);
          setLoading(false);
          return;
        }

        let student = null;

        if (profile.role === "student") {
          const { data: studentData, error: studentError } = await supabase
            .from("students")
            .select("*")
            .eq("user_id", activeSession.user.id)
            .single();

          if (studentError) {
            console.error("Failed to load student:", studentError);
          } else {
            student = studentData;
          }
        }

        const role = normalizeRole(profile.role);

        setSession({
          user: activeSession.user,
          role,
          profile: {
            fullName: profile.full_name,
            role,
            className: profile.class_name,
          },
          student,
        });
      } catch (error) {
        console.error("Auth setup failed:", error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    setup();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, activeSession) => {
      if (!activeSession) {
        setSession(null);
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", activeSession.user.id)
        .single();

      if (profileError) {
        console.error("Failed to load profile:", profileError);
        return;
      }

      let student = null;

      if (profile.role === "student") {
        const { data: studentData, error: studentError } = await supabase
          .from("students")
          .select("*")
          .eq("user_id", activeSession.user.id)
          .single();

        if (!studentError) {
          student = studentData;
        }
      }

      const role = normalizeRole(profile.role);

      setSession({
        user: activeSession.user,
        role,
        profile: {
          fullName: profile.full_name,
          role,
          className: profile.class_name,
        },
        student,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!isSupabaseConfigured || !supabase) {
      const demoUser = DEMO_USERS[normalizedEmail];
      if (!demoUser || password !== "demo123") {
        throw new Error(
          "Use teacher@acmgs.com, student@acmgs.com, or admin@acmgs.com with password demo123.",
        );
      }

      const demoSession = {
        user: {
          email: normalizedEmail,
          id: normalizedEmail,
        },
        role: demoUser.role,
        profile: {
          fullName: demoUser.name,
          role: demoUser.role,
        },
        student: demoUser.student || null,
      };

      localStorage.setItem("acmgs-demo-session", JSON.stringify(demoSession));
      setSession(demoSession);
      return demoSession;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (error) {
      throw error;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .single();

    if (profileError) {
      throw profileError;
    }

    let student = null;

    if (profile.role === "student") {
      const { data: studentData, error: studentError } = await supabase
        .from("students")
        .select("*")
        .eq("user_id", data.user.id)
        .single();

      if (studentError) {
        throw studentError;
      }

      student = studentData;
    }

    const role = normalizeRole(profile.role);

    const nextSession = {
      user: data.user,
      role,
      profile: {
        fullName: profile.full_name,
        role,
        className: profile.class_name,
      },
      student,
    };

    setSession(nextSession);
    return nextSession;
  };

  const signOut = async () => {
    if (supabase && isSupabaseConfigured) {
      await supabase.auth.signOut();
    }

    localStorage.removeItem("acmgs-demo-session");
    setSession(null);
  };

  const value = useMemo(
    () => ({
      session,
      loading,
      signIn,
      signOut,
    }),
    [session, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
