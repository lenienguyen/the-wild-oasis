/* import { NextResponse } from "next/server";

export const middleware = (request: Request) => {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
};

// redirect for specific routes
export const config = {
  matcher: ["/account", "/cabins"],
};
 */

export { auth as middleware } from "./app/_lib/auth";

// specific routes
export const config = {
  matcher: ["/account"],
};
