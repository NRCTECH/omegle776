import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

const AUTH_PAGES = ['/admin/adminLogin']
const isAuthPages = (url: string) => AUTH_PAGES.includes(url)

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request as any, secret: process.env.JWT_SECRET_KEY })
    const { nextUrl } = request
    const isAuthPageRequested = isAuthPages(nextUrl.pathname)

    if (isAuthPageRequested) {
        if (!token) {
            // Kullanıcı oturum açmamışsa, authentication sayfasına devam et
            return NextResponse.next()
        }
        // Kullanıcı oturum açmışsa, admin ana sayfasına yönlendir
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (!token) {
        // Authentication sayfası değilse ve kullanıcı oturum açmamışsa, login sayfasına yönlendir
        const searchParams = new URLSearchParams(nextUrl.searchParams)
        searchParams.set('next', nextUrl.pathname)
        return NextResponse.redirect(new URL(`/admin/adminLogin?${searchParams}`, request.url))
    }

    // Kullanıcı oturum açmışsa, istenen sayfaya devam et
    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/admin/adminLogin']
}
