import { Rocket } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4 font-sans text-foreground">
    //   <div className="mb-8 flex flex-col items-center">
    //     <Link href="/" className="flex items-center gap-2 group">
    //       <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
    //         <Rocket className="w-6 h-6 text-white" />
    //       </div>
    //       <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
    //         Otonomy
    //       </span>
    //     </Link>
    //   </div>
    <div className="TITITITIT">
      {children}
    </div>
    //   <div className="mt-8 text-center">
    //     <p className="text-sm text-gray-500 dark:text-zinc-500">
    //       &copy; {new Date().getFullYear()} Otonomy. Semua hak dilindungi.
    //     </p>
    //   </div>
    // </div>
  );
}
