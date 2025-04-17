"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext({ theme: "dark", toggle: null });

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}