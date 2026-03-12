import { auth } from "./lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const res = await auth.api.getSession({
        headers: request.headers,
    });

    const isAuthPage = request.nextUrl.pathname.startsWith("/api/auth");
    const isOnboardingPage = request.nextUrl.pathname === "/onboarding";
    const isPublicPage = request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/favicon.ico";

    if (!res) {
        if (!isAuthPage && !isPublicPage && !isOnboardingPage) {
            // Redirect to home or login if not authenticated and trying to access private pages
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    }

    // User is authenticated
    const hasOrg = res.session.activeOrganizationId || (res as any).activeOrganizationId;

    if (!hasOrg && !isOnboardingPage && !isPublicPage && !isAuthPage) {
        // Force onboarding if they have no organization
        return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    if (hasOrg && isOnboardingPage) {
        // If they already have an org, don't let them go back to onboarding
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
