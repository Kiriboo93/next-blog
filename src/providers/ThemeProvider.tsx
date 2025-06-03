"use client";

import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState, useEffect } from "react";

/**
 * Theme provider.
 * @param param0 children to have access to the provider.
 * @returns Theme provider with children inside.
 */
const ThemeProvider = ({ children }) => {
    // Active theme.
    const { theme } = useContext(ThemeContext);
    // Boolean to check if theme is mounted to draw components.
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={theme}>
            {children}
        </div>
    }
}

export default ThemeProvider;