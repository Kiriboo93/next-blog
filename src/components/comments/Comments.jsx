"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useFetchComments } from "@/utils/hooks";
import Comment from "../comment/Comment";

const Comments = ({ postSlug }) => {
    // Hook for the current session.
    const status = useSession();

    // Custom hook to get comments.
    const { comments, isLoading } = useFetchComments(postSlug);

    return <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status.status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>) : (<Link href="/login">Login to write a comment.</Link>)
        }
        <div className={styles.comments}>
            {isLoading ? "loading" : (comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
            )))}
        </div>
    </div >
}

export default Comments;