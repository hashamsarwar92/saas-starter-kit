import { User } from "./models/User";

export interface DatabaseInterface {
  createUser(user: User): Promise<void>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, updates: Partial<User>): Promise<void>;
  deleteUser(id: string): Promise<void>;
  updateUserRole(id: string, role: "user" | "admin"): Promise<void>;
  updateUserVerificationStatus(id: string, isVerified: boolean): Promise<void>;
  updateUserSubscriptionStatus(id: string, isSubscribed: boolean): Promise<void>;
  updateUserSubscriptionPlan(id: string, subscriptionPlanId: string | null): Promise<void>;
  updateUserNextBillingDate(id: string, nextBillingDate: string | null): Promise<void>;
  updateUserStripeCustomerId(id: string, stripeCustomerId: string | null): Promise<void>;

}