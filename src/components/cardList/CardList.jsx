import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { POSTS_PER_PAGE } from "@/utils/utils";

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recents Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList;