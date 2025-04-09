import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=hempidle" className={`${styles.category} ${styles.hempidle}`}>
                    <Image src="/images/categories/style.png" alt="" width={32} height={32} className={styles.image} />
                    Hempidle
                </Link>
                <Link href="/blog?cat=dipets" className={`${styles.category} ${styles.dipets}`}>
                    <Image src="/images/categories/dipets.jpg" alt="" width={32} height={32} className={styles.image} />
                    Dipets
                </Link>
                <Link href="/blog?cat=tales" className={`${styles.category} ${styles.tales}`}>
                    <Image src="/images/categories/tales.jpg" alt="" width={32} height={32} className={styles.image} />
                    Tales from Windy Meadow
                </Link>
            </div>
        </div>
    )
}

export default CategoryList;