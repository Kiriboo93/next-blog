import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}

const CategoryList = async () => {
    const data = await getData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data.categories?.map((item) => (
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