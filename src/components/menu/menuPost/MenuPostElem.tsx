import styles from "./menuPostElem.module.css"
import Link from "next/link";
import Image from "next/image";
import { CustomPost } from "../../../utils/types";
import { stringFirstUpper } from "../../../utils/utils";

/**
 * Draw a post in the right menu.
 * @param param0 with post and boolean to draw image or not.
 * @returns MenuPostElem for the right menu.
 */
const MenuPostElem = async ({ withImage, post }: { withImage: boolean, post: CustomPost }) => {
    // Date to set in the card.
    const date: Date = new Date(post?.createdAt);
    // Dynamic property of style by category.
    const category = post?.catSlug as keyof typeof styles;

    return (
        <Link href={`/posts/${post?.slug}`} className={styles.item}>
            {withImage && post?.img && (
                <div className={styles.imgContainer}>
                    <Image src={post?.img} alt="Post image" fill sizes="70px" className={styles.image} />
                </div>
            )}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[category]}`}>
                    {stringFirstUpper(post?.catSlug)}
                </span>
                <h3 className={styles.postTitle}>
                    {post?.title}
                </h3>
                <div className={styles.detail}>
                    <span className={styles.date}>{date.toLocaleDateString()}</span>
                </div>
            </div>
        </Link>
    )
}

export default MenuPostElem;