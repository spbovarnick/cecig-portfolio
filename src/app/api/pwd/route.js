import {serialize} from "cookie";
import { sanityFetch } from "@/utils/api/sanityFetch";
import bcrypt from "bcryptjs";

export const dynamic = 'force-dynamic';

export async function POST(request, params) {
  const query = `*[_type == "case_study"]{
    "slug": slug.current,
    nda,
    password,
  }`
  try {
    const cases = await sanityFetch({ query: query, qParams: {} })
    const data = await request.json();
    const enteredPwd = data.password;
    const slug = data.slug;
    const foundCase = cases.find(e => e.slug === slug)
    const pwd = foundCase.password;
    const cookie = serialize(process.env.PASSWORD_COOKIE_NAME, "true", {
      httpOnly: true,
      path: `/${slug}`,
    });
    if (!bcrypt.compareSync(enteredPwd, pwd)) {
      return new Response("Incorrect password", { status: 401 });
    }
    return new Response("Success", {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    })
  } catch (error) {
    console.error("Pwd validation error", error);
    return new Response(error.message, { status: 500 });
  }
}