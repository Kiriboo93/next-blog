import Featured from "../components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";
import { SearchParams } from "../utils/types";

/**
 * Home page component
 * @param {*} param0 to get search params.
 * @returns Home page.
 */
export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList page={page} cat={null} popular={false} />
      <Menu />
    </div>
  </div>;
}
