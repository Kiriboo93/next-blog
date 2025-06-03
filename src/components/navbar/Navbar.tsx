import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

/**
 * Component Navbar to draw header with links to different sections, theme toggle and social media links.
 * @returns Component navbar to draw header of the page.
 */
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
            <div className={styles.logo}><b><u>R.L. Dev Diary</u></b></div>
            <div className={styles.social}>
                <ThemeToggle />
                <div className={styles.socialContainer}>
                    <Link href="https://bsky.app/profile/kiriboo.bsky.social" target="_blank"><Image src="/images/social/bluesky.png" alt="bluesky logo" width={24} height={24} /></Link>
                    <Link href="https://x.com/Kiriboo93" target="_blank"><Image src="/images/social/x.png" alt="x logo" width={24} height={24} /></Link>
                    <Link href="https://www.tiktok.com/@kiriboo93" target="_blank"><Image src="/images/social/tiktok.png" alt="tiktok logo" width={24} height={24} /></Link>
                    <Link href="https://www.youtube.com/@dipetsgame" target="_blank"><Image src="/images/social/youtube.png" alt="youtube logo" width={24} height={24} /></Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar;