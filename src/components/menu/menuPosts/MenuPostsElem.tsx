import styles from "./menuPostsElem.module.css"
import Link from "next/link";
import Image from "next/image";

/**
 * Component MenuPostsElem to draw posts in the right menu.
 * @param param0 with boolean to draw image or not.
 * @returns Component MenuPosts with posts for the right menu.
 */
const MenuPostsElem = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.hempidle}`}>
                        Hempidle
                    </span>
                    <h3 className={styles.postTitle}>
                        Title example
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>10/04/2025</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.dipets}`}>
                        Dipets
                    </span>
                    <h3 className={styles.postTitle}>
                        Title example
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>10/04/2025</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.tales}`}>
                        Tales from Windy Meadow
                    </span>
                    <h3 className={styles.postTitle}>
                        Title example
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.date}>10/04/2025</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPostsElem;