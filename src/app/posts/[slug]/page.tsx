import Image from "next/image";
import styles from "./singlePage.module.css"
import Comments from "../../../components/comments/Comments";
import { getPost } from "../../../utils/services";
import { SearchParams } from "../../../utils/types";

/**
 * SinglePage to draw specific post.
 * @param {*} param0 to get slug for the post.
 * @returns SinglePage for specific post.
 */
const SinglePage = async ({ params }: { params: SearchParams }) => {
    // Slug to get specific post.
    const { slug } = params;
    // Post information.
    const data = await getPost(slug);

    return <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{data?.title}</h1>
                <div className={styles.user}>
                    {data?.user.image && (<div className={styles.userImgContainer}>
                        <Image src={data.user.image} alt="Roberto Image" fill sizes="48px" className={styles.avatar} />
                    </div>)}
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>{data?.user.name}</span>
                        <span className={styles.date}>16/04/2025</span>
                    </div>
                </div>
            </div>
            {data?.img && (<div className={styles.imgContainer}>
                <Image src={data.img} alt="" fill className={styles.image} />
            </div>)}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
            </div>
        </div>
        <Comments postSlug={slug} />
    </div>
}

export default SinglePage;