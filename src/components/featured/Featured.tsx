import styles from "./featured.module.css";
import Image from "next/image";

/**
 * Component Featured to draw featured post.
 * @returns Component with featured post.
 */
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Welcome to my game devlog.</b><br />I hope you enjoy your stay!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Example title</h1>
                    <p className={styles.postDescription}>Example description</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;