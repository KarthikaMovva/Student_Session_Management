"use client";

import { useSessions } from "@/hooks/useSessions";

export default function Home() {
  const { data, isLoading, error } = useSessions();

  if (isLoading) {
    return <div className="p-8">Loading sessions...</div>;
  }

  if (error) {
    return <div className="p-8">Something went wrong.</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Session Dashboard
      </h1>

      <p>Total Sessions: {data?.length}</p>

      <ul className="mt-6 space-y-2">
        {data?.map((session) => (
          <li key={session.id}>
            {session.student} — {session.date}
          </li>
        ))}
      </ul>
    </main>
  );
}