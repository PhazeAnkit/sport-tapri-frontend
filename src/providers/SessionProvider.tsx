"use client";

import {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { fetchMe, User } from "@/api/auth";
import FullPageLoader from "@/components/FullPageLoader";

type SessionContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const SessionContext = createContext<
  SessionContextType | undefined
>(undefined);

export function SessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      try {
        const me = await fetchMe(); // calls /auth/me
        if (isMounted) setUser(me);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response?.status === 401
        ) {
          router.replace("/login");
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

  const value: SessionContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
  };

  return (
    <SessionContext.Provider value={value}>
      {isLoading ? <FullPageLoader /> : children}
    </SessionContext.Provider>
  );
}
