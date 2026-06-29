export interface Subscription {
    id: string; // Unique identifier for the subscription
    userId: string; // The ID of the user associated with this subscription
    productId: string; // The ID of the product associated with this subscription
    status: "active" | "canceled" | "past_due" | "unpaid" | "incomplete" | "incomplete_expired"; // Current status of the subscription
    startDate: string; // The date when the subscription started
    endDate: string | null; // The date when the subscription ended, or null if it's still active
    nextBillingDate: string | null; // The date of the next billing cycle, or null if not applicable
    stripeSubscriptionId: string | null; // The Stripe subscription ID, or null if not applicable
    stripeCustomerId: string | null; // The Stripe customer ID, or null if not applicable
}