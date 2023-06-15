import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl
  const token = await getToken({ req: request, secret: 'tokenSecret' })
  const adminPages = ['/admin']
  if (!pathname.startsWith('/_next/static')) {
    if (!token && pathname !== '/login' && !pathname.startsWith('/api/auth')) return NextResponse.redirect(new URL('/login', request.url))
    if (token) {
      if (pathname === '/login') return NextResponse.redirect(new URL('/', request.url))
      if (token.role !== 'admin' && adminPages.find(page => pathname === page)) return NextResponse.redirect(new URL('/', request.url))
    }
  }
}
