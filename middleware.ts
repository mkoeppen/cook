import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
    console.log('#########################');
    
    const pathname = req.nextUrl.pathname;
    const unprotectedPaths = ["/login"];
    const isNotProtectedPath = unprotectedPaths?.some((path) => pathname == path);
    const res = NextResponse.next();
    console.log('isNotProtectedPath', isNotProtectedPath, pathname);
    
    if (isNotProtectedPath) {
        return res;
    }
    const token = await getToken({ req });
    if (!token) {
        const url = new URL(`/login`, req.url);
        console.log(url.toJSON());
        
        url.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(url);
    }
}
export const config = {
    matcher: [
      '/((?!_next|api/auth).*)(.+)'
    ],
  }