import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, location, description } = body;

    const disaster = await prisma.disaster.create({
      data: {
        type,
        location,
        description,
      },
    });

    return NextResponse.json(disaster);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating disaster' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const disasters = await prisma.disaster.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(disasters);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching disasters' }, { status: 500 });
  }
}
