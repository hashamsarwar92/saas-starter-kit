"use client";
import React from "react";
import { CodeForm, EmailForm, PasswordResetForm } from "@/lib/auth/forms";
import { CodeSchemaType, PasswordResetSchemaType } from "../schemas";
import { EmailSchemaType } from "../schemas";
import useAuth from "../hooks/useAuth";

const ForgotPasswordFlow = () => {
  const [steps, setSteps] = React.useState<
    "email" | "verify-email" | "reset-password"
  >("email");

  const {
    prepareEmail,
    sendPasswordResetEmailCode,
    verifyPasswordResetCode,
    resetPassword,
    passwordResetSuccess,
  } = useAuth();
  return (
    <div>
      {steps === "email" && (
        <EmailForm
          onSubmit={async (data: EmailSchemaType) => {
            console.log("Email submitted:", data.email);
            await prepareEmail(data);
            console.log("Email prepared:", data.email);
            await sendPasswordResetEmailCode(data);
            console.log("Password reset email sent to:", data.email);
            setSteps("verify-email");
          }}
        />
      )}
      {steps === "verify-email" && (
        <CodeForm
          onSubmit={async (data: CodeSchemaType) => {
            await verifyPasswordResetCode(data);
            setSteps("reset-password");
          }}
          resendCode={async () => {
            await sendPasswordResetEmailCode({ email: "" });
          }}
          delay={10000} // 10 seconds delay for resending code
        />
      )}
      {steps === "reset-password" && (
        <PasswordResetForm
          onSubmit={async (data: PasswordResetSchemaType) => {
            await resetPassword(data);
            await passwordResetSuccess("/sign-in");
          }}
        />
      )}
    </div>
  );
};

export default ForgotPasswordFlow;
