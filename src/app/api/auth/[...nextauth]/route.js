import { authOptions } from "../../../../utils/auth";
import NextAuth from "next-auth";

// Using NextAuth as handler in GET and POST petitions.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };