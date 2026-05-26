import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/admin',
    '/admin/:path*',
    '/api/:path*',
    '/__clerk/:path*', // Allows Clerk's internal system tokens to sync cleanly
  ],
};