import { type Metadata } from "next"
import Link from "next/link"

import { FieldDescription } from "@/components/ui/field"
import ForgotPasswordForm from "@/app/(auth)/forgot-password/_components/forgot-password-form"

export const metadata: Metadata = {
  title: "Lupa Kata Sandi | Otonomy",
  description: "Pulihkan kata sandi akun Otonomy Anda.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="relative container flex-1 shrink-0 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="h-screen flex items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Lupa Kata Sandi
            </h1>
            <p className="text-sm text-muted-foreground">
              Masukkan email Anda di bawah ini untuk menerima tautan pemulihan
            </p>
          </div>
          <ForgotPasswordForm />
          {/* <FieldDescription className="px-6 text-center">
            Dengan melanjutkan, Anda menyetujui{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">Ketentuan Layanan</Link> dan{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">Kebijakan Privasi</Link> kami.
          </FieldDescription> */}
        </div>
      </div>
      <div className="relative hidden h-full flex-col p-10 text-primary lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gradient-start to-gradient-end flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">Otonomy</span>
          </a>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="leading-normal text-balance">
            &ldquo;Keamanan akun Anda adalah prioritas kami. Pulihkan kata sandi Anda dengan aman melalui proses terverifikasi kami.&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  )
}
