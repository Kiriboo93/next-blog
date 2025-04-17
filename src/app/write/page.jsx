"use client";

import styles from "./write.module.css";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

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