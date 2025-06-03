import { getCategories } from "../../utils/services";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { CustomCategory } from "../../utils/types";

/**
 * CategoryList component to draw a list of categories.
 * @returns Component with a list of categories.
 */
const CategoryList = async () => {
    // All categories.
    const data = await getCategories();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.categories?.map((item: CustomCategory) => (
                    <Link href={"/blog?cat=" + item.slug} className={`${styles.category} ${styles[item.slug]}`} key={item.id}>
                        {item.img && (<Image src={"/images/categories" + item.img} alt={item.slug} width={75} height={50} className={styles.image} />)}
                        <b className={styles.fixedText}>{item.title}</b>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList;