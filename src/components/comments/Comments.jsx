import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
    const status = "authenticated";

    return <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>) : (<Link href="/login">Login to write a comment.</Link>)
        }
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/Roberto.png" alt="User image" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Roberto Luquero</span>
                        <span className={styles.date}>16/04/2025</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Example Example Example ExampleExample Example Example Example Example ExampleExampleExample
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/Roberto.png" alt="User image" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Roberto Luquero</span>
                        <span className={styles.date}>16/04/2025</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Example Example Example ExampleExample Example Example Example Example ExampleExampleExample
                </p>
            </div>
        </div>
    </div >
}

export default Comments;