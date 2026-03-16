import { type Metadata } from "next"
// import Image from "next/image"
import Link from "next/link"

// import { cn } from "@/lib/utils"
// import buttonVariants from "@/components/ui/variants/button-cva"
import { FieldDescription } from "@/components/ui/field"
import RegisterForm from "@/app/(auth)/register/_components/register-form"

export const metadata: Metadata = {
  title: "Daftar | Otonomy",
  description: "Buat akun Otonomy baru.",
}

export default function AuthenticationPage() {
  return (
    <div className="relative container flex-1 shrink-0 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col p-10 text-primary lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Otonomy */}
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gradient-start to-gradient-end flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">Otonomy</span>
          </a>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="leading-normal text-balance">
            &ldquo;Bergabunglah dengan ribuan profesional lainnya yang telah menggunakan Otonomy untuk mengoptimalkan operasional bisnis mereka.&rdquo;
          </blockquote>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Buat Akun Baru
            </h1>
            <p className="text-sm text-muted-foreground">
              Masukkan email Anda di bawah ini untuk mendaftar
            </p>
          </div>
          <RegisterForm />
          <FieldDescription className="px-6 text-center">
            Dengan mengklik lanjut, Anda menyetujui{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">Ketentuan Layanan</Link> dan{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">Kebijakan Privasi</Link> kami.
          </FieldDescription>
        </div>
      </div>
    </div>
  )
}