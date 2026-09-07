import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const AuthContext = createContext(null);

const DEMO_USERS = {
  "teacher@acmgs.com": { name: "Teacher Demo", role: "teacher" },
  "student@acmgs.com": { name: "Student Demo", role: "student" },
  "admin@acmgs.com": { name: "Admin Demo", role: "admin" },
};

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return undefined;
    }

    const setup = async () => {
      const {
        data: { session: activeSession },
      } = await supabase.auth.getSession();

      if (activeSession) {
        setSession({
          user: activeSession.user,
          role: activeSession.user.email?.includes("teacher") ? "teacher" : "student",
        });
      }

      setLoading(false);
    };

    setup();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, activeSession) => {
      setSession(
        activeSession
          ? {
              user: activeSession.user,
              role: activeSession.user.email?.includes("teacher") ? "teacher" : "student",
            }
          : null,
      );
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
        user: { email: normalizedEmail, id: normalizedEmail },
        role: demoUser.role,
        profile: { fullName: demoUser.name, role: demoUser.role },
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

    const role = data.user.email?.includes("teacher") ? "teacher" : "student";
    const nextSession = {
      user: data.user,
      role,
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

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
