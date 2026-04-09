import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // Define the preferred host
  const preferredHost = 'www.offrouteadventure.in';
  
  // 1. Enforce HTTPS (if not in local development)
  // 2. Enforce 'www' subdomain
  const isLocalhost = host?.includes('localhost') || host?.includes('127.0.0.1');
  
  if (!isLocalhost && (protocol === 'http' || host !== preferredHost)) {
    const targetUrl = new URL(request.url);
    targetUrl.protocol = 'https';
    targetUrl.host = preferredHost;
    return NextResponse.redirect(targetUrl.toString(), 301);
  }

  return NextResponse.next();
}

// Config to match all paths except for static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (local public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
