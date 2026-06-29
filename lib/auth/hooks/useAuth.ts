"use client";

import { useState } from "react";
import { AuthInterface } from "@/lib/auth/AuthInterface";
import { SignUpSchemaType, CodeSchemaType, EmailSchemaType, PasswordResetSchemaType, SignInSchemaType } from "@/lib/auth/schemas";
import createClerkClientService from "../clerk/ClerkClient";

export default function useAuth(): AuthInterface {
    const authClient = createClerkClientService();

    const signUpWithGoogle = async (successRoute: string) => {
        return authClient.signUpWithGoogle(successRoute);
    }

    const signInWithGoogle = async (successRoute: string) => {
        return authClient.signInWithGoogle(successRoute);
    }

    const signUp = async (data: SignUpSchemaType) => {
        return authClient.signUp(data);
    }

    const sendEmailVerificationCode = async (data: EmailSchemaType) => {
        return authClient.sendEmailVerificationCode(data);
    }

    const verifyEmailCode = async (data: CodeSchemaType) => {
        return authClient.verifyEmailCode(data);
    }

    const signUpSuccess = async (route: string) => {
        return authClient.signUpSuccess(route);
    }

    const signIn = async (data: SignInSchemaType) => {
        return authClient.signIn(data);
    }

    const signInSuccess = async (route: string) => {
        return authClient.signInSuccess(route);
    }

    const prepareEmail = async (data: EmailSchemaType) => {
        return authClient.prepareEmail(data);
    }

    const sendPasswordResetEmailCode = async (data: EmailSchemaType) => {
        return authClient.sendPasswordResetEmailCode(data);
    }

    const verifyPasswordResetCode = async (data: CodeSchemaType) => {
        return authClient.verifyPasswordResetCode(data);
    }

    const resetPassword = async (data: PasswordResetSchemaType) => {
        return authClient.resetPassword(data);
    }

    const passwordResetSuccess = async (route: string) => {
        return authClient.passwordResetSuccess(route);
    }

    const signOutUser = async () => {
        return authClient.signOutUser();
    }


    return {
        signUp,
        sendEmailVerificationCode,
        verifyEmailCode,
        signUpSuccess,
        signIn,
        signInSuccess,
        prepareEmail,
        sendPasswordResetEmailCode,
        verifyPasswordResetCode,
        resetPassword,
        passwordResetSuccess,
        signOutUser,
        signUpWithGoogle,
        signInWithGoogle,
    }

}