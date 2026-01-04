"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { fetchMe, User } from "@/api/auth";
import FullPageLoader from "@/components/FullPageLoader";

type SessionContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      try {
        const me = await fetchMe(); // GET /me
        if (isMounted) setUser(me);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          const currentPath = window.location.pathname;
          router.replace(
            `/auth?mode=login&redirectTo=${encodeURIComponent(currentPath)}`
          );
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadSession();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <SessionContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {isLoading ? <FullPageLoader /> : children}
    </SessionContext.Provider>
  );
}
