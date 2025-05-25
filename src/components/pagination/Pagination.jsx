"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button className={styles.button + (!hasPrev ? " " + styles.invisible : "")} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
            <button className={styles.button + (!hasNext ? " " + styles.invisible : "")} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
        </div>
    )
}

export default Pagination;