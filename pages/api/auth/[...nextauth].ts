import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    "please provide process.env.NEXTAUTH_SECRET environment variable"
  );
}
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          console.log(credentials);
          
          if (
            credentials?.username !== "mkoe" ||
            credentials.password !== "test"
          ) {
            throw new Error("Invalid email or password");
          }

          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          return user;
        }
      }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  pages: {
    signIn: "/login",
  }
}
export default NextAuth(authOptions)