import NextAuth, { Account, DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { env } from './env.mjs';

import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: { accessToken: string } & DefaultSession['user'];
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    user: User;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) {
          return null;
        }

        try {
          const response = await fetch(env.NEXT_PUBLIC_APP_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                mutation Login($email: String!, $password: String!) {
                  login(email: $email, password: $password) {
                    ... on AuthPayload {
                      token
                      user {
                        id
                        email
                      }
                    }
                    ... on AuthError {
                      status
                      code
                    }
                  }
                }
              `,
              variables: {
                email: credentials.email,
                password: credentials.password,
              },
            }),
          });
          if (response.ok) {
            const result = await response.json();

            if (result.data.login.token) {
              return {
                ...result.data.login.user,
                accessToken: result.data.login.token,
              } as User;
            }

            throw new Error('Invalid credentials');
          }

          throw new Error('Failed while requesting the API.');
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     authorization: {
    //         params: {
    //             prompt: "consent",
    //             access_type: "offline",
    //             response_type: "code",
    //         },
    //     },
    // }),
    // GitHubProvider({
    //     clientId: process.env.GITHUB_CLIENT_ID,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
    //     authorization: {
    //         params: {
    //             prompt: "consent",
    //             access_type: "offline",
    //             response_type: "code",
    //         },
    //     },
    // }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      session.user = token as any;
      return session;
    },
  },
});
