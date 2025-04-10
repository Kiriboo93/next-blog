import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
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
        </div>
    )
}

export default Menu;