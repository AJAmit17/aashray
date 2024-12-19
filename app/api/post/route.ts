import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const { userId: clerkUserId } = await auth();

        console.log(clerkUserId);

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
        const { userId: clerkUserId } = await auth();
        if (!clerkUserId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { content } = body;

        if (!content) {
            return new NextResponse("Content is required", { status: 400 });
        }

        const user = await prisma.post.findFirst({
            where: { 
                userId: clerkUserId
            }
        });

        console.log(user);

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        const post = await prisma.post.create({
            data: {
                content,
                imageUrl : "", 
                userId: user.id,
                likes: 0
            }
        });

        return NextResponse.json(post);
    } catch (error) {
        console.error("[POSTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
