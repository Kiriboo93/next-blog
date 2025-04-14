import MenuPostsElem from "./menuPosts/MenuPostsElem";
import MenuCategories from "./menuCategories/MenuCategories";
import styles from "./menu.module.css";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPostsElem withImage={false} />

            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />

            <h1 className={styles.title}>Editor's Pick</h1>
            <MenuPostsElem withImage={true} />
        </div>
    )
}

export default Menu;