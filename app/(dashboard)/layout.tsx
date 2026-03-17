import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Bell, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <SidebarProvider>
        //     <AppSidebar />
        //     <SidebarInset className="bg-white dark:bg-zinc-950">
        //         <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-50 dark:border-zinc-900 px-6 justify-between sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-10">
        //             <div className="flex items-center gap-2">
        //                 <SidebarTrigger className="-ml-1 h-9 w-9 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all rounded-lg" />
        //                 <Separator orientation="vertical" className="mr-2 h-4 bg-gray-200 dark:bg-zinc-800" />
        //                 <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800 w-64 group focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
        //                     <Search className="h-4 w-4 text-gray-400 group-focus-within:text-indigo-500" />
        //                     <input 
        //                         placeholder="Cari apapun..." 
        //                         className="bg-transparent border-none outline-none text-sm w-full text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-zinc-500"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="flex items-center gap-3">
        //                 <button className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all relative">
        //                     <Bell className="h-5 w-5" />
        //                     <span className="absolute top-2 right-2.5 h-2 w-2 bg-indigo-600 rounded-full border-2 border-white dark:border-zinc-950"></span>
        //                 </button>
        //             </div>
        //         </header>
        //         <main className="flex flex-1 flex-col gap-8 p-8 max-w-[1600px] mx-auto w-full">
        //             {children}
        //         </main>
        //     </SidebarInset>
        // </SidebarProvider>
        <>
            {children}
        </>
    );
}
