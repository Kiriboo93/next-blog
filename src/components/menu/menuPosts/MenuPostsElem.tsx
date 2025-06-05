import styles from "./menuPostsElem.module.css"
import { getPosts } from "../../../utils/services";
import { CustomPost } from "../../../utils/types";
import MenuPostElem from "../menuPost/MenuPostElem";

/**
 * Component MenuPostsElem to draw posts in the right menu.
 * @param param0 with boolean to draw image or not.
 * @returns Component MenuPosts with posts for the right menu.
 */
const MenuPostsElem = async ({ withImage }) => {
    // Posts and number of last post to find if there are more pages.
    const { posts }: { posts: CustomPost[] } = await getPosts(1, null, true);

    return (
        <div className={styles.items}>
            {posts?.map((post: CustomPost) => (
                <MenuPostElem withImage={withImage} post={post} key={post?.id} />
            ))}
        </div>
    )
}

export default MenuPostsElem;