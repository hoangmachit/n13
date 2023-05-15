import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { isAdminAuthenticated, isMypageAuthenticated } from "../libraries/auth";
const middleware = async (request: NextRequest) => {
    if (request.nextUrl.pathname.startsWith('/login')) {
        const token = request.cookies.get('next-token')?.value;
        const authenticated = await isAdminAuthenticated(token);
        if (authenticated) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }
    if (request.nextUrl.pathname.includes('/admin')) {
        const token = request.cookies.get('next-token')?.value;
        const authenticated = await isAdminAuthenticated(token);
        if (!authenticated) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    if (request.nextUrl.pathname.includes('/mypage')) {
        const authenticated = await isMypageAuthenticated(request);
        if (!authenticated) {
            const url = new URL(`/api/auth/signin`, request.url);
            url.searchParams.set("callbackUrl", encodeURI(request.url));
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        '/login',
        '/admin/:path*',
        '/mypage/:path*'
    ],
};

export default middleware;