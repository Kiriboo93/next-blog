"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

/**
 * Component Pagination to draw buttons to change the page of posts.
 * @param {*} param0 with page, if it has to draw prev button and the next button.
 * @returns Component with pagination for posts.
 */
const Pagination = ({ page, hasPrev, hasNext }: { page: number, hasPrev: boolean, hasNext: boolean }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button className={styles.button + (!hasPrev ? " " + styles.invisible : "")} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
            <button className={styles.button + (!hasNext ? " " + styles.invisible : "")} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
        </div>
    )
}

export default Pagination;