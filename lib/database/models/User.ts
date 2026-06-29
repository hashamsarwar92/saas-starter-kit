
export type UserRole = "user" | "admin";


export interface User {
    id: string; // Clerk userId
    email: string;

    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;

    role: UserRole;
    isVerified: boolean; // Optional field to track if the user's email is verified
    isSubscribed: boolean; // Optional field to track if the user has an active subscription
    subscriptionPlanId?: string | null; // Optional field to track the user's subscription plan (e.g. "free", "pro", "business")
    nextBillingDate?: string | null; // Optional field to track the next billing date for subscription renewals
    stripeCustomerId?: string | null; // Optional field to track the Stripe customer ID for billing purposes

    createdAt?: string;
    updatedAt?: string;
}