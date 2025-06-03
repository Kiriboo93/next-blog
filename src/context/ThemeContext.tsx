"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";

// Create theme context.
export const ThemeContext = createContext({ theme: "dark", toggle: null });

// Gets context from localStorage if available and else, light as default.
const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

// Theme context provider with function to change the theme on toggle.
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
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