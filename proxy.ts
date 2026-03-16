import { auth } from "./lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const path = request.nextUrl.pathname;
    const isAuthPage = path.startsWith("/api/auth");
    const isOnboardingPage = path === "/onboarding";
    const isPublicPage =
        path === "/" ||
        path === "/favicon.ico" ||
        path === "/login" ||
        path === "/register" ||
        path === "/dashboard" || /** @todo urgent remove */
        path === "/forgot-password";

    if (!session) {
        if (!isAuthPage && !isPublicPage) {
            // Redirect to login if not authenticated and trying to access private pages
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return NextResponse.next();
    }

    // User is authenticated
    const organizations = await auth.api.listOrganizations({
        headers: request.headers,
    });

    const hasAnyOrg = organizations && organizations.length > 0;

    // 1. If user HAS organizations, they should NOT be on /onboarding
    if (hasAnyOrg && isOnboardingPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // 2. If user HAS NO organizations, they MUST go to /onboarding (unless it's a public/auth page)
    if (!hasAnyOrg && !isOnboardingPage && !isPublicPage && !isAuthPage) {
        return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    // 3. Prevent authenticated users from visiting login/register
    if (path === "/login" || path === "/register") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
