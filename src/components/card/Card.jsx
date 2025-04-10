import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>10/04/2025</span>
                    <span> - </span>
                    <span className={styles.category}>CATEGORY</span>
                </div>
                <Link href="/">
                    <h1>Title example</h1>
                </Link>
                <p className={styles.description}>
                    Example of a long text showing all the content the post has.
                    Example of a long text showing all the content the post has.
                    Example of a long text showing all the content the post has.
                    Example of a long text showing all the content the post has.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;