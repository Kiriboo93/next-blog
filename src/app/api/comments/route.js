import { getAuthSession } from "../../../utils/auth";
import { prisma } from "../../../utils/connect";
import { NextResponse } from "next/server";

/**
 * Service to get all comments of a post.
 * @param {*} req param to get url search params.
 * @returns Json objet with all comments from a post if correct, error if not.
 */
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const postSlug = searchParams.get("postSlug");

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug }),
            },
            include: { user: true }
        });
        return new NextResponse(
            JSON.stringify(comments)
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}

/**
 * Service to create a new comment in a post.
 * @param {*} req param to get comment body
 * @returns comment created if correct or error if not.
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
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email }
        });
        return new NextResponse(
            JSON.stringify(comment)
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}