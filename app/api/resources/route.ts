import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

const formatClerkUserId = (userId: string) => {
    return userId.replace('user_', '');
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { name, type, location, quantity, description } = body;

        const formattedUserId = formatClerkUserId(userId);

        const resource = await prisma.resource.create({
            data: {
                name,
                type,
                location,
                quantity,
                description,
                userId: formattedUserId, // Use formatted ID
            },
        });

        return NextResponse.json(resource);
    } catch (error) {
        console.error("[RESOURCES_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type");
        const status = searchParams.get("status");

        const resources = await prisma.resource.findMany({
            // where: {
            //     ...(type && { type }),
            //     ...(status && { status }),
            // },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(resources);
    } catch (error) {
        console.error("[RESOURCES_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}