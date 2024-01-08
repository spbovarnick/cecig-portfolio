import { sanityFetch } from './utils/api/sanityFetch'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'
}

export async function middleware(request){
  const query = `*[_type == "case_study"]{
    "slug": slug.current,
    nda,
    password,
  }`
  const cases = await sanityFetch({ query: query, qParams: {} })
  const foundCase = cases.find(e => e.slug === request.nextUrl.pathname.slice(1))
  console.log(request.nextUrl.pathname)
  // if (foundCase.slug === request.nextUrl.pathname.slice(1) && foundCase.nda) {
  //   // console.log(request.headers)
  // }
 

  return NextResponse.next()
}