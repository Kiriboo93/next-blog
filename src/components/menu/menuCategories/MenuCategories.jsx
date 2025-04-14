import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
    return <div className={styles.categoryList}>
        <Link href="/blog?cat=tales" className={`${styles.categoryItem} ${styles.tales}`}>Tales from Windy Meadow</Link>
        <Link href="/blog?cat=dipets" className={`${styles.categoryItem} ${styles.dipets}`}>Dipets</Link>
        <Link href="/blog?cat=hempidle" className={`${styles.categoryItem} ${styles.hempidle}`}>Hempidle</Link>
    </div>
}

export default MenuCategories;