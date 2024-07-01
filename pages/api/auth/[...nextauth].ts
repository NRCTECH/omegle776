import  CredentialsProvider  from 'next-auth/providers/credentials';

import NextAuth from 'next-auth'
import bcrypt from 'bcryptjs'
import connectMongo from '@/lib/connectDb';
import Admin from '@/models/Admin';


// Extend Token type to include id if it exists
interface ExtendedToken {
  id?: string;
}

// Extend Session user type to include id if it exists
interface ExtendedSessionUser {
  id?: string;
}

if (!process.env.JWT_SECRET_KEY) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env.local')
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectMongo()
      
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Invalid email or password')
        }
      
        const user = await Admin.findOne({ email: credentials.email })
      
        if (!user) {
          throw new Error('Invalid email or password')
        }
      
        const isMatch = await bcrypt.compare(credentials.password, user.password)
      
        if (!isMatch) {
          throw new Error('Invalid email or password')
        }
      
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Extend token with id property if user exists
      if (user) {
        (token as ExtendedToken).id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Extend session user with id property if token contains it
      if (session.user && (token as ExtendedToken).id) {
        (session.user as ExtendedSessionUser).id = (token as ExtendedToken).id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/"
  },
  secret: process.env.JWT_SECRET_KEY,
})