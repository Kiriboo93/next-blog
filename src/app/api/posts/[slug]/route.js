import { prisma } from "../../../../utils/connect";
import { NextResponse } from "next/server";

/**
 * Service to find an specific post.
 * @param {*} req unused param.
 * @param param1 param to get the post by slug.
 * @returns JSON with info about the post if correct, error if not.
 */
export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true }
        })
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