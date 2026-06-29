
export interface Product {
  id: string; 
  index: string; // For ordering plans (e.g. 0 for free, 1 for pro, etc.)
  name: string; // e.g. "Free", "Pro", "Business"
  description: string | null;
  priceId: string | null; // Stripe price ID for the user's subscription, or null for free plan
  price: number; // Price in dollars (e.g. 9.99), or 0 for free plan
  features: string[]; // List of features available to the user based on their subscription
  isPopular: boolean; // Whether the user's plan is the most popular one
}