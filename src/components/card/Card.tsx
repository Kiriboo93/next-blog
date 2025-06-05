import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import { removeHtmlTags } from "../../utils/utils";
import { CustomPost } from "../../utils/types";

/**
 * Card component for posts.
 * @param {*} param0 post to show in the card.
 * @returns Component with information about a post.
 */
const Card = ({ post }: { post: CustomPost }) => {
    // Date to set in the card.
    const date: Date = new Date(post?.createdAt);

    return (
        <div className={styles.container}>
            {post?.img && <div className={styles.imgContainer}>
                <Image src={post?.img} alt="Post image" fill sizes="344px" unoptimized={true} className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{date.toLocaleDateString()}</span>
                    <span> - </span>
                    <span className={styles.category}>{post?.catSlug.toUpperCase()}</span>
                </div>
                <Link href={`/posts/${post?.slug}`}>
                    <h1 className={styles.title}>{post?.title}</h1>
                </Link>
                <p className={styles.description}>
                    {removeHtmlTags(post?.desc.slice(0, 200)) + "..."}
                </p>
                <Link href={`/posts/${post?.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;