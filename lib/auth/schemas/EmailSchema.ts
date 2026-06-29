import { z } from "zod";
import { emailField } from "./SchemaFields";

export const EmailSchema = z.object({
    email: emailField
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;