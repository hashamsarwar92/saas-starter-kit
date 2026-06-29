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
import { EmailSchemaType, EmailSchema } from "../schemas";

const EmailForm = ({
  onSubmit,
}: {
  onSubmit: (data: EmailSchemaType) => Promise<void>;
}) => {
  const router = useRouter();
  const [authErrors, setAuthErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<EmailSchemaType>({
    resolver: zodResolver(EmailSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const handleOnSubmit = async (data: EmailSchemaType) => {
    setAuthErrors(null);
    setIsSubmitting(true);
    console.log("Submitting email form with data:");
    try {
      await onSubmit({
        email: data.email,
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
        title="Forgot your password?"
        description="Enter your email to reset your password"
        className="text-center mb-6"
      />
      <FormAlert message={authErrors} />
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div id="clerk-captcha" />
        <Spacer size="8px" />
        <Input
          type="email"
          label="Email"
          placeholder="Enter email"
          autoComplete="email"
          aria-describedby="email-error"
          {...register("email")}
          error={errors.email?.message}
        />
        <Spacer size="24px" />
        <Button disabled={isSubmitting} type="submit" className="w-full">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Card>
  );
};

export default EmailForm;
