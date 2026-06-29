import * as z from "zod";


// reusable fields
const nameField = z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Must be at least 2 characters");

const emailField = z
    .email("Invalid email address")
    .min(1, "Email is required");

const passwordField = z
    .string()
    .min(8, "Password must be at least 8 characters long");

const codeField = z
    .string()
    .length(6, { message: "Verification code must be exactly 6 digits" });

export { nameField, emailField, passwordField, codeField };