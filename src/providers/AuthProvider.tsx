"use client";

import { SessionProvider } from "next-auth/react";

/**
 * Session provider.
 * @param param0 children to have access to the provider.
 * @returns Session provider with children inside.
 */
const AuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider;