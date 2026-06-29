import React from "react";
import { CodeForm, SignUpForm } from "@/lib/auth/forms";
import { CodeSchemaType, SignUpSchemaType } from "../schemas";
import useAuth from "../hooks/useAuth";

const SignUpFlow = () => {
  const [steps, setSteps] = React.useState<"sign-up" | "verify-email">(
    "sign-up",
  );
  const { signUp, sendEmailVerificationCode, verifyEmailCode, signUpSuccess, signUpWithGoogle } = useAuth();

  return (
    <div>
      {steps === "sign-up" && (
        <SignUpForm
          onSubmit={async (data: SignUpSchemaType) => {
            await signUp(data);
            await sendEmailVerificationCode({ email: data.email });
            setSteps("verify-email");
          }}
          onSignUpWithGoogle={async () => {
            await signUpWithGoogle("/dashboard");
          }}
        />
      )}
      {steps === "verify-email" && (
        <CodeForm
          onSubmit={async (data: CodeSchemaType) => {
            await verifyEmailCode(data);
            await signUpSuccess("/dashboard");
          }}
        />
      )}
    </div>
  );
};

export default SignUpFlow;
