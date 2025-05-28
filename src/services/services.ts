"use server";

import { SERVER_URL } from "@/utils/utils";
import { Comment } from "../../prisma/app/generated/prisma/client";

/* Petition to get comments. */
export async function getComments(postSlug) {
    let response: Comment[] = [];
    await fetch(SERVER_URL + `api/comments?postSlug=${postSlug}`, {
        method: "GET",
    }).then((res) => res.json()).then((elems) => response = elems);

    return response;
}