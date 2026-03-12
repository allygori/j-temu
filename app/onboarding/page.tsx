"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import { Rocket, Loader2 } from "lucide-react";

export default function OnboardingPage() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error: authError } = await authClient.organization.create({
                name,
                slug: slug || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
            });

            if (authError) {
                setError(authError.message || "Gagal membuat organisasi. Coba lagi.");
                return;
            }

            // Successfully created, redirect to dashboard or home
            router.push("/");
        } catch (err) {
            setError("Terjadi kesalahan yang tidak terduga.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4 font-sans text-foreground">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-xl rounded-2xl border border-gray-100 dark:border-zinc-800 p-8">
                <div className="space-y-2 text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                            <Rocket className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Selamat Datang di Otonomy</h1>
                    <p className="text-gray-500 dark:text-zinc-400">
                        Hanya satu langkah lagi. Ayo buat workspace untuk bisnismu.
                    </p>
                </div>

                <form onSubmit={handleCreate} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="org-name" className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Nama Bisnis</label>
                        <input
                            id="org-name"
                            placeholder="Contoh: Barbershop Classic"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (!slug) {
                                    setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
                                }
                            }}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="org-slug" className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Booking Link</label>
                        <div className="flex items-center">
                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 text-sm h-12">
                                otonomy.id/
                            </span>
                            <input
                                id="org-slug"
                                placeholder="nama-bisnis-kamu"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))}
                                required
                                className="w-full h-12 px-4 rounded-r-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                            />
                        </div>
                        <p className="text-xs text-gray-400 dark:text-zinc-500 mt-1 italic">
                            Ini adalah URL yang akan kamu bagikan ke klien.
                        </p>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-xl border border-red-100 dark:border-red-900/30 font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full h-14 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Sedang Menyiapkan...
                            </div>
                        ) : (
                            "Mulai Penjadwalan Sekarang"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
