"use client"

import { login } from "@/lib/actions/auth";

export default function SignIn() {
  return (
    <div>
      <form action={login.bind(null, "github")}>
        <button type="submit">
          Sign in with GitHub
        </button>
      </form>

      <form action={login.bind(null, "google")}>
        <button type="submit">
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
