import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page"));

    const POST_PER_PAGE = 2;

    try {
        const posts = await prisma.post.findMany({
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (page - 1 > 0 ? page - 1 : 0)
        });
        return new NextResponse(
            JSON.stringify({ posts })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}