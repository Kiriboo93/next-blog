"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useState } from "react";

/**
 * Links for navbar. If you are logged in it shows a link to log out, otherwise one to log in.
 * @returns Component with links for navbar.
 */
const AuthLinks = () => {
    // Variable to store if hamburger UI is open or closed.
    const [open, setOpen] = useState<boolean>(false);
    // Status of the session to know if logged in or not.
    const { status }: { status: String } = useSession();

    return <>
        {status === "unauthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
        ) : (
            <>
                <Link href="/write" className={styles.link}>Write</Link>
                <span className={styles.link} onClick={() => signOut()}>Logout</span>
            </>
        )}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>

        {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                {status === "unauthenticated" ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <>
                        <Link href="/write">Write</Link>
                        <span className={styles.link}>Logout</span>
                    </>
                )}
            </div>
        )}
    </>
}

export default AuthLinks;