"use client";

import { useState } from "react";
import { http } from "@/api/http";

export default function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    interest: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      await http.post("/auth/register", form);
      onSwitch();
    } catch (err: any) {
      setError(err.response?.data?.error ?? "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-semibold">Create Account</h1>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="interest"
        placeholder="Interest (e.g. Football)"
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
        {loading ? "Creating..." : "Register"}
      </button>

      <p className="text-sm text-white/70 text-center">
        Already have an account?{" "}
        <button onClick={onSwitch} className="underline">
          Login
        </button>
      </p>
    </div>
  );
}
