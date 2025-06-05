"use client";

import styles from "./write.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../../utils/firebase";
import { postPost } from "../../utils/services";

/**
 * WritePage to write a new post.
 * @returns Page to write a new post.
 */
const WritePage = () => {
    // Session to check if logged in and email who is logged in.
    const session = useSession();
    // Router to change page.
    const router: AppRouterInstance = useRouter();
    // Variable to load file.
    const [file, setFile] = useState<File>(null);
    // Variable to download file.
    const [media, setMedia] = useState<string>("");
    // Boolean to show or hide buttons.
    const [open, setOpen] = useState<boolean>(false);
    // Variable to save post content.
    const [value, setValue] = useState<string>("");
    // Variable to save post title.
    const [title, setTitle] = useState<string>("");
    // Variable to save post category.
    const [cat, setCat] = useState<string>("");
    // Firebase storage.
    const storage = getStorage(app);

    // Uploads a file to firebase.
    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + " - " + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);



    if (session.status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    if (session.status === "unauthenticated" ||
        (session.status === "authenticated" && (session.data?.user?.email !== "robertoluquero@hotmail.com") && (session.data?.user?.email !== "robertoluquero@gmail.com"))) {
        router.push("/");
    }

    return <div className={styles.container}>
        <input type="text" placeholder="Write the title" className={styles.input} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Write the category" className={styles.inputCat} onChange={e => setCat(e.target.value)} />
        <div className={styles.editor}>
            <div className={styles.buttonDiv}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/images/components/plus.png" alt="" width={16} height={16}></Image>
                </button>
            </div>
            {open && (
                <div className={styles.add}>
                    <input type="file" id="image" className={styles.inputButton} onChange={e => setFile(e.target.files[0])} />
                    <button className={styles.button}>
                        <label className={styles.labelInput} htmlFor="image">
                            <Image src="/images/components/external.png" alt="" width={16} height={16}></Image>
                        </label>
                    </button>
                    <button className={styles.button}>
                        <Image src="/images/components/image.png" alt="" width={16} height={16}></Image>
                    </button>
                    <button className={styles.button}>
                        <Image src="/images/components/video.png" alt="" width={16} height={16}></Image>
                    </button>
                </div>
            )}
            <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Write your post" />
        </div>
        <button className={styles.publish} onClick={() => {
            ((session.data?.user?.email === "robertoluquero@hotmail.com") || (session.data?.user?.email === "robertoluquero@gmail.com")) && postPost(title, cat, value, media)
        }}>Publish</button>
    </div>
}

export default WritePage;