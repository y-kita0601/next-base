import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    console.log('Get')
    const contents = await getAllContents();
    return NextResponse.json(contents);
}

export async function POST(request: NextRequest) {
    const { content } = await request.json();

    await prisma.content.create({
        data: {
            title: content['title'],
            body: content['body'],
        },
    });

    const contents = await getAllContents();
    return NextResponse.json(contents);
}

export async function DELETE(request: NextRequest) {
    const id = String(request.nextUrl.searchParams.get('id')!);

    await prisma.content.delete({
        where: {
            id: id,
        },
    });

    const notes = await getAllContents();
    return NextResponse.json(notes);
}

async function getAllContents() {
    const contents = await prisma.content.findMany();
    return contents;
}