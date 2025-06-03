import CardList from "../../components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "../../components/menu/Menu";
import { stringFirstUpper } from "../../utils/utils";
import { SearchParams } from "../../utils/types";

/**
 * BlogPage component to draw a page of the blog.
 * @param {*} param0 param to get search params.
 * @returns the component of the main page from the blog and the category page.
 */
const BlogPage = ({ searchParams }: { searchParams: SearchParams }) => {
    // Current page or the first one as default.
    const page = parseInt(searchParams.page) || 1;
    // Category to draw if selected.
    const { cat } = searchParams;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{stringFirstUpper(cat) + " Category"}</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage;