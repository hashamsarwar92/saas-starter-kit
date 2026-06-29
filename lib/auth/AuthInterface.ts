import { SignUpSchemaType, CodeSchemaType, EmailSchemaType, PasswordResetSchemaType, SignInSchemaType } from "./schemas";
export interface AuthInterface {
  // SIGN UP
  signUp(data: SignUpSchemaType): Promise<void>;
  sendEmailVerificationCode(data: EmailSchemaType): Promise<void>;
  verifyEmailCode(data: CodeSchemaType): Promise<void>;
  signUpSuccess(route: string): Promise<void>;
  signUpWithGoogle(successRoute: string): Promise<void>;

  // SIGN IN
  signIn(data: SignInSchemaType): Promise<void>;
  signInSuccess(route: string): Promise<void>;
  signInWithGoogle(successRoute: string): Promise<void>;

  // PASSWORD RESET
  prepareEmail(data: EmailSchemaType): Promise<void>;
  sendPasswordResetEmailCode(data: EmailSchemaType): Promise<void>;
  verifyPasswordResetCode(data: CodeSchemaType): Promise<void>;
  resetPassword(data: PasswordResetSchemaType): Promise<void>;
  passwordResetSuccess(route: string): Promise<void>;

  // SESSION
  signOutUser(): Promise<void>;
}