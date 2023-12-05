"use client";

import { api } from "~/utils/api";

export default function AuthState() {
  const [data] = api.auth.getSession.useSuspenseQuery();

  return (
    <details>
      <summary>AuthState</summary>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </details>
  );
}
