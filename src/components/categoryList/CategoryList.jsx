import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=dipets" className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
                    Dipets
                </Link>
            </div>
        </div>
    )
}

export default CategoryList;