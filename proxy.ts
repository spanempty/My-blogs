import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
      // headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }
  return NextResponse.next();
}

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  try {
    const base64Credentials = authHeader.split(" ")[1];
    // Edge Runtime Fix: Use atob() instead of Buffer
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(":");

    const expectedUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const expectedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    return username === expectedUsername && password === expectedPassword;
  } catch (e) {
    return false;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function proxy(request: NextRequest) {
//   if (!(await isAuthenticated(request))) {
//     return new NextResponse("Unauthorized", {
//       status: 401,
//       headers: { "WWW-Authenticate": "Basic" },
//     });
//   }
// }

// async function isAuthenticated(request: NextRequest): Promise<boolean> {
//   const authHeader = request.headers.get("authorization");
//   if (!authHeader || !authHeader.startsWith("Basic ")) {
//     return false;
//   }
//   const base64Credentials = authHeader.slice(6);
//   const credentials = Buffer.from(base64Credentials, "base64").toString(
//     "ascii"
//   );
//   const [username, password] = credentials.split(":");
//   // Hardcoded credentials for demonstration; use environment variables in production
//   const expectedUsername = "admin";
//   const expectedPassword = "password";
//   return username === expectedUsername && password === expectedPassword;
// }

// export const config = {
//   matcher: ["/admin/:path*", "/admin"],
// };
