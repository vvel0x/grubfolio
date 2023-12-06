"use client";

import { api } from "~/trpc/react";

export default function AuthState() {
  const [data] = api.auth.getSession.useSuspenseQuery();

  return (
    <details>
      <summary>Client AuthState</summary>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </details>
  );
}
