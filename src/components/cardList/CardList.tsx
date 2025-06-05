import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { POSTS_PER_PAGE } from "../../utils/utils";
import { getPosts } from "../../utils/services";
import { CustomPost } from "../../utils/types";

/**
 * CardList component to draw a list of posts.
 * @param param0 with page and category of list of posts. 
 * @returns Component with a list of cards with posts information.
 */
const CardList = async ({ page, cat, popular }: { page: number, cat: string, popular: boolean }) => {
  // Posts and number of last post to find if there are more pages.
  const { posts, count }: { posts: CustomPost[], count: number } = await getPosts(page, cat, popular);
  // Variable to check if there is a previous page.
  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  // Variable to check if there is a next page.
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recents Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post: CustomPost) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList;