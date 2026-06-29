import "server-only";
import { db } from "@/lib/database/firebase/firebase-admin";
import { User } from "@/lib/database/models/User";
import { collections } from "@/lib/database/firebase/collections";

export const dbActions = {
    async createUser(user: User) {
        const usersRef = db.collection(collections.users);
            const ref = usersRef.doc(user.id);
        
            const existing = await ref.get();
        
            if (existing.exists) {
                // Optional: update instead of overwrite
                await ref.update({
                    ...user,
                    updatedAt: new Date(),
                });
                return;
            }
        
            await ref.set({
                ...user,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
    },

    async getUserById(id: string): Promise<User | null> {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        const doc = await ref.get();
        return doc.exists ? doc.data() as User : null;
    },

    async updateUser(id: string, updates: Partial<User>) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            ...updates,
            updatedAt: new Date(),
        });
    },

    async deleteUser(id: string) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.delete();
    },

    async updateUserRole(id: string, role: "user" | "admin") {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            role,
            updatedAt: new Date(),
        });
    },

    async updateUserVerificationStatus(id: string, isVerified: boolean) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            isVerified,
            updatedAt: new Date(),
        });
    },

    async updateUserSubscriptionStatus(id: string, isSubscribed: boolean) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            isSubscribed,
            updatedAt: new Date(),
        });
    },

    async updateUserSubscriptionPlan(id: string, subscriptionPlanId: string | null) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            subscriptionPlanId,
            updatedAt: new Date(),
        });
    },

    async updateUserNextBillingDate(id: string, nextBillingDate: string | null) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            nextBillingDate,
            updatedAt: new Date(),
        });
    },

    async updateUserStripeCustomerId(id: string, stripeCustomerId: string | null) {
        const usersRef = db.collection(collections.users);
        const ref = usersRef.doc(id);
        await ref.update({
            stripeCustomerId,
            updatedAt: new Date(),
        });
    },

 
}