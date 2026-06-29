"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchema,
  SignInSchemaType,
} from "@/lib/auth/schemas/SignInSchema";
import {
  Card,
  CardHeader,
  Input,
  Spacer,
  PasswordInput,
  Button,
  Separator,
  FormAlert,
} from "../ui";
import { CodeSchemaType, CodeSchema, EmailSchemaType, EmailSchema } from "../schemas";
import EmailForm from "./email-form";
import useDelay from "../hooks/useDelay";

const CodeForm = ({
  onSubmit,
  resendCode,
  delay = 10000, // default delay of 10 seconds
}: {
  onSubmit: (data: CodeSchemaType) => Promise<void>;
  resendCode?: () => Promise<void>;
  delay?: number;
}) => {
  const router = useRouter();
  const [authErrors, setAuthErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
 const { time, setTime, isLoading, setIsLoading } = useDelay(delay); // Use the provided delay

 
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<CodeSchemaType>({
    resolver: zodResolver(CodeSchema),
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  const handleOnSubmit = async (data: CodeSchemaType) => {
    setAuthErrors(null);
    setIsSubmitting(true);
    console.log("Submitting code form with data:");
    try {
      await onSubmit({
        code: data.code,
      });
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAuthErrors(err.message);
      } else {
        setAuthErrors("An unexpected error occurred during sign in.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black border-gray-700 shadow-xl p-8 w-full max-w-md">
      <CardHeader
        title="Enter the code"
        description="Enter the code sent to your email"
        className="text-center mb-6"
      />
      <FormAlert message={authErrors} />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div id="clerk-captcha" />
        <Spacer size="8px" />
        <Input
          type="text"
          label="Code"
          placeholder="Enter code"
          autoComplete="off"
          aria-describedby="code-error"
          {...register("code")}
          error={errors.code?.message}
        />
        <Spacer size="24px" />
        <Button disabled={isSubmitting} type="submit" className="w-full">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {/* Resend */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Didn't receive a code?{" "}
          <button
            onClick={async () => {
              setIsLoading(true);
              setTime(delay / 1000);
              console.log("Resend code clicked");
              if (resendCode) {
                await resendCode();
              }
            }}
            disabled={isLoading}
            type="button"
            className="text-black-600 hover:underline font-medium"
          >
            {!isLoading ? "Resend code" : `Resend code in ${time}s`}
          </button>
        </p>
      </div>
    </Card>
  );
};

export default CodeForm;
