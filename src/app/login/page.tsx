"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

/**
 * LoginPage page with buttons to log in with Google and Github.
 * @returns Page with login buttons from Google and Github.
 */
const LoginPage = () => {
    const { status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (status === "authenticated") {
        router.push("/");
    }

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={() => signIn("google")}>
                <Image src="/images/components/google.png" alt="Google logo" width={40} height={40} />
                Sign in with Google
            </div>
            <div className={styles.socialButton} onClick={() => signIn("github")}>
                <Image src="/images/components/github.png" alt="Github logo" width={40} height={40} />
                Sign in with Github
            </div>
        </div>
    </div>
}

export default LoginPage;