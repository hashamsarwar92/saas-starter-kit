import { z } from "zod";
import { emailField, passwordField } from "./SchemaFields";



export const SignInSchema = z.object({
    email: emailField,
    password: passwordField
})

type SignInSchemaType = z.infer<typeof SignInSchema>;
export type { SignInSchemaType };
