import styles from "./footer.module.css";
import Link from "next/link";

/**
 * Component Footer to draw footer with links to different sections.
 * @returns Component footer with links to different sections.
 */
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Hempidle</Link>
                    <Link href="/">Dipets</Link>
                    <Link href="/">Tales from Windy Meadow</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="https://bsky.app/profile/kiriboo.bsky.social" target="_blank">Bluesky</Link>
                    <Link href="https://x.com/Kiriboo93" target="_blank">Twitter</Link>
                    <Link href="https://www.tiktok.com/@kiriboo93" target="_blank">Tiktok</Link>
                    <Link href="https://www.youtube.com/@dipetsgame" target="_blank">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;