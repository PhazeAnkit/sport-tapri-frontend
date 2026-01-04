"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { http } from "@/api/http";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Mimic login (replace with real credentials later)
      await http.post("/auth/login", {
        email: "john@example.com",
        password:  "password123",
      });

      // Backend sets httpOnly cookie
      router.replace(redirectTo);
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login Page (Test)</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
