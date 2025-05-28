import Image from "next/image";
import styles from "./comment.module.css";

const Comment = ({ comment }) => {
    const date = new Date(comment.createdAt);

    return <div className={styles.comment}>
        <div className={styles.user}>
            {comment?.user?.image && (<Image src={comment.user.image} alt="User image" width={50} height={50} className={styles.image} />)}
            <div className={styles.userInfo}>
                <span className={styles.username}>{comment.user.name}</span>
                <span className={styles.date}>{date.toLocaleDateString()}</span>
            </div>
        </div>
        <p className={styles.desc}>
            {comment.desc}
        </p>
    </div>
}

export default Comment;