"use client";

import LoginForm from "@/app/components-built-in/loginForm";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-primary-background mt-28 font-semibold text-center">
        Sistema de tickets UTPL
      </h1>
      <LoginForm />
    </main>
  );
}
