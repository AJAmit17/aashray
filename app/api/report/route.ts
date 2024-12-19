import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { title, description, type, location, imageUrl } = body;

        const report = await prisma.report.create({
            data: {
                title,
                description,
                type,
                location,
                imageUrl,
                userId,
            },
        });

        return NextResponse.json(report);
    } catch (error) {
        console.error("[REPORTS_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function GET() {
    try {
        const reports = await prisma.report.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });

        return NextResponse.json(reports);
    } catch (error) {
        console.error("[REPORTS_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}