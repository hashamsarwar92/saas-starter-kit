import { z } from "zod";
import { nameField, emailField, passwordField } from "./SchemaFields";


export const SignUpSchema = z
    .object({
        firstName: nameField,
        lastName: nameField,
        email: emailField,
        password: passwordField,
        passwordConfirmation: passwordField,
    }).refine(
        (data) => data.password === data.passwordConfirmation,
        {
            message: "Passwords do not match",
            path: ["passwordConfirmation"]
        }
    )

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
