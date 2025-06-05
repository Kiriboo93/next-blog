import MenuPostsElem from "./menuPosts/MenuPostsElem";
import MenuCategories from "./menuCategories/MenuCategories";
import styles from "./menu.module.css";

/**
 * Component Menu to draw right menu of the blog.
 * @returns Component menu with different parts as popular, categories and editor's pick.
 */
const Menu = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPostsElem withImage={true} />

            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
        </div>
    )
}

export default Menu;