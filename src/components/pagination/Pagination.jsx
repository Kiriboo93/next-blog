"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ page }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button className={styles.button}>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}

export default Pagination;