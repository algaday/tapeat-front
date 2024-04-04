import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const authRoutes = ['/login', '/register-owner', '/']
  if (token && authRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
