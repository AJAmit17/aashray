import { NextResponse } from "next/server";
import { getChatResponse } from "@/lib/gemini";
import { auth } from '@clerk/nextjs/server'

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log(userId)

        const body = await req.json();
        const { message } = body;

        if (!message) {
            return new NextResponse("Message is required", { status: 400 });
        }

        const response = await getChatResponse(message);
        return NextResponse.json({ response });
    } catch (error) {
        console.error("[CHAT_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}