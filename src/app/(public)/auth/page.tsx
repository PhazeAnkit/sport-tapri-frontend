"use client";

import { useRouter, useSearchParams } from "next/navigation";
import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm";
import clsx from "clsx";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const isRegister = mode === "register";

  const switchToLogin = () => {
    router.replace("/auth?mode=login");
  };

  const switchToRegister = () => {
    router.replace("/auth?mode=register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div
          className={clsx(
            "flex w-[200%] transition-transform duration-700 ease-in-out",
            isRegister ? "-translate-x-1/2" : "translate-x-0"
          )}
        >
          {/* Login */}
          <div className="w-1/2 p-10">
            <LoginForm onSwitch={switchToRegister} />
          </div>

          {/* Register */}
          <div className="w-1/2 p-10">
            <RegisterForm onSwitch={switchToLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
