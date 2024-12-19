import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                comments: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        
        return NextResponse.json(posts);
    } catch (error) {
        console.error("[POSTS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { content } = body;

        if (!content) {
            return new NextResponse("Content is required", { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { clerkId: userId }
        });

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        const post = await prisma.post.create({
            data: {
                content,
                userId: user.id
            }
        });

        return NextResponse.json(post);
    } catch (error) {
        console.error("[POSTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
