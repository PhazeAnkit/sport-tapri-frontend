"use client";

import { useSession } from "@/lib/auth";

export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useSession();

  if (isLoading) {
    return <p>Loading session...</p>;
  }

  if (!isAuthenticated) {
    // This should never render because middleware + provider handle it
    return (
      <div>
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 z-50">
          Tailwind OK
        </div>
        <p>Not authenticated</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Home Page (Protected)</h1>

      <p>
        Logged in as <strong>{user?.username}</strong>
      </p>
      <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 z-50">
        Tailwind OK
      </div>

      <p>Refresh this page — it should stay here.</p>
    </div>
  );
}
