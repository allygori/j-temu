"use client";

import * as React from "react";
import {
    Calendar,
    LayoutDashboard,
    Settings,
    Users,
    Clock,
    Link as LinkIcon,
    Rocket,
    ChevronRight,
    Search,
    Bell,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

const data = {
    user: {
        name: "Admin Otonomy",
        email: "admin@otonomy.id",
        avatar: "/avatars/admin.png",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Appointments",
            url: "/appointments",
            icon: Calendar,
        },
        {
            title: "Schedule",
            url: "/schedule",
            icon: Clock,
        },
        {
            title: "Booking Links",
            url: "/booking-links",
            icon: LinkIcon,
        },
        {
            title: "Customers",
            url: "/customers",
            icon: Users,
        },
    ],
    secondary: [
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
    ],
};

export function AppSidebar() {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/login");
    };

    return (
        <Sidebar collapsible="icon" className="border-r border-gray-100 dark:border-zinc-800">
            <SidebarHeader className="h-16 flex items-center px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                        <Rocket className="h-5 w-5" />
                    </div>
                    <span className="font-black text-xl tracking-tight text-gray-900 dark:text-white group-data-[collapsible=icon]:hidden">
                        Otonomy
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest px-6 py-4">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton 
                                        render={<a href={item.url} />}
                                        tooltip={item.title} 
                                        className="h-11 px-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span className="font-medium">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest px-6 py-4">
                        System
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.secondary.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton 
                                        render={<a href={item.url} />}
                                        tooltip={item.title} 
                                        className="h-11 px-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span className="font-medium">{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-gray-50 dark:border-zinc-800">
                <DropdownMenu>
                    <DropdownMenuTrigger 
                        render={
                            <SidebarMenuButton size="lg" className="h-12 w-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all rounded-xl ring-0 focus:ring-0">
                                <Avatar className="h-8 w-8 rounded-lg border border-gray-200 dark:border-zinc-700">
                                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                    <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 font-bold">
                                        {data.user.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden ml-2">
                                    <span className="truncate font-bold text-gray-900 dark:text-white">{data.user.name}</span>
                                    <span className="truncate text-xs text-gray-500 dark:text-zinc-500 font-medium">{data.user.email}</span>
                                </div>
                            </SidebarMenuButton>
                        }
                    />
                    <DropdownMenuContent className="w-56 rounded-xl border-gray-100 dark:border-zinc-800" side="right" align="end" sideOffset={4}>
                        <DropdownMenuLabel className="font-semibold px-3 py-2">Akun Saya</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-gray-50 dark:bg-zinc-800" />
                        <DropdownMenuItem className="px-3 py-2 cursor-pointer focus:bg-indigo-50 dark:focus:bg-indigo-900/10 focus:text-indigo-600 dark:focus:text-indigo-400 rounded-lg">
                            <Users className="mr-2 h-4 w-4" /> Profil
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-3 py-2 cursor-pointer focus:bg-indigo-50 dark:focus:bg-indigo-900/10 focus:text-indigo-600 dark:focus:text-indigo-400 rounded-lg">
                            <Calendar className="mr-2 h-4 w-4" /> Subscription
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-50 dark:bg-zinc-800" />
                        <DropdownMenuItem onClick={handleLogout} className="px-3 py-2 cursor-pointer text-red-600 focus:bg-red-50 dark:focus:bg-red-900/10 focus:text-red-600 rounded-lg font-semibold">
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
