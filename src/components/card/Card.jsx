import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import { removeHtmlTags } from "@/utils/utils";

const Card = ({ item }) => {
    const date = new Date(item.createdAt);

    return (
        <div className={styles.container} key={item.id}>
            {item.img && <div className={styles.imgContainer}>
                <Image src={item.img} alt="Post image" fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{date.toLocaleDateString()}</span>
                    <span> - </span>
                    <span className={styles.category}>{item.catSlug.toUpperCase()}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.description}>
                    {removeHtmlTags(item.desc.slice(0, 200)) + "..."}
                </p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;