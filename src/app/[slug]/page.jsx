import Image from "next/image";
import styles from "./singlePage.module.css"
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Example</h1>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/Roberto.png" alt="Roberto Image" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Roberto Luquero</span>
                        <span className={styles.date}>16/04/2025</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>Example</p>
                    <h2>Example</h2>
                    <p>Example</p>
                    <p>Example</p>
                </div>
            </div>
        </div>
        <Comments />
    </div>
}

export default SinglePage;