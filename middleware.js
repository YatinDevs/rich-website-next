import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const { pathname } = request.nextUrl;

    const userFormSubmitted = request.cookies.get('userFormSubmitted');
    const otpValidated = request.cookies.get('otpValidated');
    if(!userFormSubmitted && pathname ==='/get-quote/user-verification/'){
    
      return NextResponse.redirect(new URL('/',request.url));
    }


    
    if(userFormSubmitted && !otpValidated  && pathname ==='/get-quote/user-verification/downloadPdf'){
      return NextResponse.redirect(new URL('/',request.url));
  }
  
 

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/get-quote/user-verification', '/get-quote/user-verification/downloadPdf']
}