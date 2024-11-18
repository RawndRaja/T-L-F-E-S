import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from "axios";
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === "/auth/login"
    const isPrivatePath = path === "/signup" || path === "/verifyemail"
    const tokenValue = request.cookies.get('token')
    const isAdmin = "null" //request.cookies.get('IsAdmin');

    const isAdminPath = path === "/Admin" || path === "/Admin/auth" || path === "/Admin/auth/verifyadmin" 
    

    if (tokenValue) {
    if (isPublicPath && tokenValue) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (isPrivatePath && tokenValue) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (isAdminPath && tokenValue && isAdmin) {
      console.log("Hello Admin")
    }
    if (isAdminPath && tokenValue && !isAdmin) {
      return NextResponse.redirect(new URL('/', request.url))
    }


}
if (isAdminPath && !tokenValue && !isAdmin) {
  return NextResponse.redirect(new URL('/', request.url))
}

if (!isPublicPath && !tokenValue) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
}


//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [


    '/auth/login',
    '/Admin/auth/signup',
    '/profile',
    "/Admin",
    "/Admin/auth",
    "/Admin/auth/verifyadmin" 

  ]
}