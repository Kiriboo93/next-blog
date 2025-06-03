"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";

/**
 * Component ThemeToggle to draw the switch to change theme.
 * @returns Component theme toggle to change the theme.
 */
const ThemeToggle = () => {
    // Toggle function and current theme.
    const { toggle, theme }: { toggle: any, theme: String } = useContext(ThemeContext);

    return <div className={styles.container} onClick={toggle} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }}>
        <Image src="/images/components/moon.png" alt="" width={14} height={14} />
        <div className={styles.circle} style={theme === "dark" ? { left: 1, backgroundColor: "#0f172a" } : { right: 1, backgroundColor: "white" }}></div>
        <Image src="/images/components/sun.png" alt="" width={14} height={14} />
    </div>
}

export default ThemeToggle;