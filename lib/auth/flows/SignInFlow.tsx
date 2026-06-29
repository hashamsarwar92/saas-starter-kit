"use client";
import React from "react";
import { SignInForm } from "@/lib/auth/forms";
import { SignInSchemaType } from "../schemas";
import useAuth from "../hooks/useAuth";

const SignInFlow = () => {
  const { signIn, signInSuccess, signInWithGoogle } = useAuth();

  return (
    <SignInForm
      onSubmit={async (data: SignInSchemaType) => {
        await signIn(data);
        await signInSuccess("/dashboard");
      }}
      onSignInWithGoogle={async () => {
        await signInWithGoogle("/dashboard");
      }}
    />
  );
};

export default SignInFlow;
