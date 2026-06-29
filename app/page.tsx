"use client";

import { Button } from "@/lib/auth/ui";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome 👋</h1>

      <p className="text-gray-600">Please sign in or create an account</p>

      <div className="flex gap-4">
        <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
        <Button onClick={() => router.push("/sign-up")} variant="outline">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
