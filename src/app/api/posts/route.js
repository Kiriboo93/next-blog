import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
import { POSTS_PER_PAGE } from "@/utils/utils";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page"));

    const query = {
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1 > 0 ? page - 1 : 0)
    }

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ]);
        return new NextResponse(
            JSON.stringify({ posts, count })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}