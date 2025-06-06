import { prisma } from "../../../utils/connect";
import { NextResponse } from "next/server";

// Service to get categories.
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(
            JSON.stringify({ categories })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" })
        );
    }
}