"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, UserPlus } from "lucide-react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error: authError } = await authClient.signUp.email({
                email,
                password,
                name,
            });

            if (authError) {
                setError(authError.message || "Gagal membuat akun. Silakan coba lagi.");
                return;
            }

            // Redirect to onboarding to create organization
            router.push("/onboarding");
            router.refresh();
        } catch (err) {
            setError("Terjadi kesalahan yang tidak terduga.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/onboarding",
        });
    };

    return (
        <Card className="w-full max-w-md shadow-2xl border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
            <CardHeader className="space-y-1 pb-8 text-center pt-8">
                <CardTitle className="text-3xl font-bold tracking-tight">Daftar Akun</CardTitle>
                <CardDescription className="text-gray-500 dark:text-zinc-400">
                    Mulai kelola penjadwalan bisnismu secara otomatis
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                    <Button 
                        variant="outline" 
                        onClick={handleGoogleLogin}
                        className="h-12 font-semibold border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all rounded-xl"
                    >
                        <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Daftar dengan Google
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200 dark:border-zinc-800" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-zinc-900 px-2 text-gray-500 dark:text-zinc-500 font-medium tracking-wider">
                            Atau daftar dengan email
                        </span>
                    </div>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input 
                            id="name" 
                            type="text" 
                            placeholder="John Doe" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                            className="h-12 border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="nama@perusahaan.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className="h-12 border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            id="password" 
                            type="password" 
                            placeholder="Min. 8 karakter"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            minLength={8}
                            className="h-12 border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-indigo-500"
                        />
                    </div>
                    
                    {error && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-lg border border-red-100 dark:border-red-900/30 font-medium">
                            {error}
                        </div>
                    )}

                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-12 text-base font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20"
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        ) : (
                            <UserPlus className="mr-2 h-5 w-5" />
                        )}
                        Buat Akun Sekarang
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pb-8 border-t border-gray-50 dark:border-zinc-800 pt-6">
                <div className="text-center text-sm text-gray-500 dark:text-zinc-400">
                    Sudah punya akun?{" "}
                    <Link 
                        href="/login" 
                        className="font-bold text-indigo-600 hover:text-indigo-500 underline underline-offset-4 transition-colors"
                    >
                        Masuk di sini
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
