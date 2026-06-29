import ClerkWebhook from "@/lib/auth/clerk/ClerkWebhook";


export async function POST(req: Request) {
    try {
        await ClerkWebhook(req);
        return new Response("Webhook received", { status: 200 });
    } catch (err) {
        console.error("Error processing webhook:", err);
        return new Response("Error processing webhook", { status: 500 });
    }

}