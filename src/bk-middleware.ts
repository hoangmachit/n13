import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        console.log('about middleware');
        return NextResponse.rewrite(
            new URL("/about-dest?message=You Are Not Authorized!", request.url)
        );
    }
    if (request.nextUrl.pathname.startsWith('/admin')) {
        console.log('admin middleware');
        return NextResponse.rewrite(
            new URL("/about-dest?message=You Are Not Authorized!", request.url)
        );
    }
    return NextResponse.next();
}