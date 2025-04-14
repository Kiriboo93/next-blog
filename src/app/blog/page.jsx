import styles from "./blogPage.module.css";

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tales from Windy Meadow Blog</h1>
            <div className={styles.content}></div>
        </div>
    )
}

export default BlogPage;