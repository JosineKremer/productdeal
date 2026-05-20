import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('norde-fin-auth')
  if (!auth || auth.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/businessplan/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/businessplan/financieel/:path*',
}
