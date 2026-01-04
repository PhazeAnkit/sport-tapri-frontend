"use client";

import { useSession } from "@/lib/auth";

export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useSession();

  if (isLoading) {
    return <p>Loading session...</p>;
  }

  if (!isAuthenticated) {
    // This should never render because middleware + provider handle it
    return <p>Not authenticated</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Home Page (Protected)</h1>

      <p>
        Logged in as <strong>{user?.username}</strong>
      </p>

      <p>Refresh this page — it should stay here.</p>
    </div>
  );
}
