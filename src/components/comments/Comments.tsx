"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Comment from "../comment/Comment";
import { useState } from "react";
import useSWR from "swr";
import { SERVER_URL, fetcher } from "../../utils/utils";
import { postComment } from "../../utils/services";

/**
 * Comments component to draw a list of comments.
 * @param param0 with slug of post.
 * @returns Component with a list of comments written in a post.
 */
const Comments = ({ postSlug }) => {
    // Hook for the current session.
    const { status } = useSession();
    // comments, function to mutate the comments and boolean to show loading.
    const { data, mutate, isLoading } = useSWR(SERVER_URL + `api/comments?postSlug=${postSlug}`, fetcher);
    // Hook to set new comment body.
    const [desc, setDesc] = useState("");

    return <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input} onChange={e => setDesc(e.target.value)} />
                <button className={styles.button} onClick={() => postComment(desc, postSlug, mutate)}>Send</button>
            </div>) : (<Link href="/login">Login to write a comment.</Link>)
        }
        <div className={styles.comments}>
            {isLoading ? "loading" : (data.map((comment) => (
                <Comment comment={comment} key={comment.id} />
            )))}
        </div>
    </div >
}

export default Comments;