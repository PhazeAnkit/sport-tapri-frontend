"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { http } from "@/api/http";

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      await http.post("/auth/login", form);

      const redirectTo = searchParams.get("redirectTo") || "/";
      router.replace(redirectTo);
    } catch (err: any) {
      setError(err.response?.data?.error ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-semibold">Welcome Back</h1>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="auth-input"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="auth-input"
      />

      <button onClick={handleSubmit} disabled={loading} className="auth-button">
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-sm text-white/70 text-center">
        Don’t have an account?{" "}
        <button onClick={onSwitch} className="underline">
          Register
        </button>
      </p>
    </div>
  );
}
