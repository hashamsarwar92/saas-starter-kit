"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpSchema,
  SignUpSchemaType,
} from "@/lib/auth/schemas/SignUpSchema";
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
import { PasswordResetSchema, PasswordResetSchemaType } from "../schemas";

const PasswordResetForm = ({
  onSubmit,
}: {
  onSubmit: (data: PasswordResetSchemaType) => Promise<void>;
}) => {
  const router = useRouter();
  const [authErrors, setAuthErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<PasswordResetSchemaType>({
    resolver: zodResolver(PasswordResetSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleOnSubmit = async (data: PasswordResetSchemaType) => {
    setAuthErrors(null);
    setIsSubmitting(true);
    console.log("Submitting password reset form with data:");
    try {
      await onSubmit({
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      });
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAuthErrors(err.message);
      } else {
        setAuthErrors("An unexpected error occurred during password reset.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black border-gray-700 shadow-xl p-8 w-full max-w-md">
      <CardHeader
        title="Password Reset"
        description="Enter your new password to reset your account password"
        className="text-center mb-6"
      />
      <FormAlert message={authErrors} />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div id="clerk-captcha" />
      
        <PasswordInput
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          autoComplete="new-password"
          aria-describedby="password-error"
          {...register("password")}
          error={errors.password?.message}
        />
        <Spacer size="8px" />
        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm password"
          autoComplete="new-password"
          aria-describedby="confirmPassword-error"
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />
        <Spacer size="24px" />
        <Button disabled={isSubmitting} type="submit" className="w-full">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        <Spacer size="24px" />

    
      </form>
      
    </Card>
  );
};

export default PasswordResetForm;
