"use client";

import styles from "./write.module.css";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

/**
 * WritePage to write a new post.
 * @returns Page to write a new post.
 */
const WritePage = () => {
    // Status of the active session to check if logged in.
    const { status }: { status: String } = useSession();
    // Router to change page.
    const router: AppRouterInstance = useRouter();
    // Boolean to show or hide buttons.
    const [open, setOpen] = useState<boolean>(false);
    // Variable to save post content.
    const [value, setValue] = useState<ReactQuill.Value>("");

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (status === "authenticated") {
        router.push("/");
    }

    return <div className={styles.container}>
        <input type="text" placeholder="Write your title" className={styles.input} />
        <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
                <Image src="/plus.png" alt="" width={16} height={16}></Image>
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addButton}>
                        <Image src="/plus.png" alt="" width={16} height={16}></Image>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/plus.png" alt="" width={16} height={16}></Image>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/plus.png" alt="" width={16} height={16}></Image>
                    </button>
                </div>
            )}
            <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Write your post" />
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
}

export default WritePage;