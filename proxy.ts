import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Next.js 16 strict-compliant explicit routing paths
    '/admin',
    '/admin/:path*',
    '/api/:path*',
  ],
};