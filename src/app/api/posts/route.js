import { prisma } from "../../../utils/connect";
import { NextResponse } from "next/server";
import { POSTS_PER_PAGE } from "../../../utils/utils";
import { getAuthSession } from "../../../utils/auth";

/**
 * Service to get list of post paginated.
 * @param {*} req param to get url search params.
 * @returns A new page of posts if correct, error if not.
 */
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page"));
    const cat = searchParams.get("cat");
    const popular = searchParams.get("popular");

    const query = {
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1 > 0 ? page - 1 : 0),
        where: {
            ...(cat && { catSlug: cat }),
        },
        orderBy: [
            {
                ...(popular && { views: 'desc' })
            },
            {
                createdAt: 'desc'
            }
        ]
    }

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
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

/**
 * Service to create a new post.
 * @param {*} req param to get post body
 * @returns post created if correct or error if not.
 */
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }

    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email }
        });
        return new NextResponse(
            JSON.stringify(post)
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}