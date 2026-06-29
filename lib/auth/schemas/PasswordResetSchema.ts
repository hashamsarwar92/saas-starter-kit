import { z } from "zod";
import { passwordField } from "./SchemaFields";



export const PasswordResetSchema = z.object({
    password: passwordField,
    passwordConfirmation: passwordField
}).refine(
    (data) => data.password === data.passwordConfirmation,
    {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    }
)

export type PasswordResetSchemaType = z.infer<typeof PasswordResetSchema>;


export const UpdatePasswordSchema = z.object({
    oldPassword: passwordField,
    password: passwordField,
    passwordConfirmation: passwordField
}).refine(
    (data) => data.password === data.passwordConfirmation,
    {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    }
).refine((data) => data.oldPassword !== data.password, {
    message: "New password must be different from old password",
    path: ["password"], // or ["oldPassword"] depending on where you want error
});

export type UpdatePasswordSchemaType = z.infer<typeof UpdatePasswordSchema>;