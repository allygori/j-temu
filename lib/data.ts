// ─── TypeScript Interfaces ─────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarGradient: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  isPopular: boolean;
  ctaText: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// ─── Data ──────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Tutorial", href: "#tutorial" },
  { label: "Blog", href: "#blog" },
  { label: "Affiliate", href: "#affiliate" },
];

export const features: Feature[] = [
  {
    icon: "Calendar",
    title: "Penjadwalan Otomatis",
    description:
      "Atur ketersediaan Anda sekali, dan biarkan klien memilih waktu yang paling sesuai. Tanpa bolak-balik pesan, tanpa konflik jadwal.",
  },
  {
    icon: "Link",
    title: "Satu Link untuk Semua",
    description:
      "Bagikan link booking personal Anda di mana saja — WhatsApp, Instagram, email, atau website. Klien langsung bisa menjadwalkan pertemuan.",
  },
  {
    icon: "Bell",
    title: "Pengingat & Notifikasi Cerdas",
    description:
      "Kurangi no-show hingga 90% dengan pengingat otomatis via email dan WhatsApp. Anda dan klien selalu terupdate.",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    icon: "Settings",
    title: "Atur Jadwal Anda",
    description:
      "Tentukan jam kerja, durasi meeting, dan buffer time sesuai preferensi Anda. Setup hanya butuh 2 menit.",
  },
  {
    number: 2,
    icon: "Share2",
    title: "Bagikan Link Booking",
    description:
      "Dapatkan link personal yang bisa Anda sematkan di bio media sosial, website, atau kirim langsung ke klien.",
  },
  {
    number: 3,
    icon: "CalendarCheck",
    title: "Klien Pilih Waktu",
    description:
      "Klien melihat slot yang tersedia dan langsung booking. Konfirmasi otomatis masuk ke kalender Anda berdua.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rina Wijaya",
    role: "Founder & CEO",
    company: "KonsulPro.id",
    quote:
      "Sejak pakai Otonomy, waktu saya untuk koordinasi jadwal berkurang 80%. Klien saya juga lebih happy karena prosesnya super mudah.",
    avatarGradient: "from-indigo-400 to-purple-500",
  },
  {
    name: "Budi Santoso",
    role: "Head of Operations",
    company: "EduTech Nusantara",
    quote:
      "Kami mengelola 200+ sesi mentoring per minggu. Otonomy menghilangkan semua drama penjadwalan yang dulu bikin tim kami pusing.",
    avatarGradient: "from-purple-400 to-pink-500",
  },
  {
    name: "Anisa Rahma",
    role: "Freelance Designer",
    company: "Studio Anisa",
    quote:
      "Sebagai freelancer, kesan profesional itu penting. Link booking Otonomy langsung bikin klien percaya bahwa saya serius soal waktu.",
    avatarGradient: "from-blue-400 to-indigo-500",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "Rp 0",
    period: "selamanya",
    description: "Sempurna untuk memulai dan mencoba semua fitur dasar.",
    features: [
      { text: "1 tipe acara", included: true },
      { text: "Booking page personal", included: true },
      { text: "Integrasi Google Calendar", included: true },
      { text: "Notifikasi email", included: true },
      { text: "Custom branding", included: false },
      { text: "Notifikasi WhatsApp", included: false },
      { text: "Analitik lanjutan", included: false },
      { text: "Priority support", included: false },
    ],
    isPopular: false,
    ctaText: "Mulai Gratis",
  },
  {
    name: "Basic",
    price: "Rp 99.000",
    period: "/bulan",
    description: "Untuk profesional yang ingin tampil lebih serius.",
    features: [
      { text: "5 tipe acara", included: true },
      { text: "Booking page personal", included: true },
      { text: "Integrasi Google Calendar", included: true },
      { text: "Notifikasi email", included: true },
      { text: "Custom branding", included: true },
      { text: "Notifikasi WhatsApp", included: true },
      { text: "Analitik lanjutan", included: false },
      { text: "Priority support", included: false },
    ],
    isPopular: false,
    ctaText: "Pilih Basic",
  },
  {
    name: "Pro",
    price: "Rp 249.000",
    period: "/bulan",
    description: "Paket terlengkap untuk bisnis yang berkembang pesat.",
    features: [
      { text: "Unlimited tipe acara", included: true },
      { text: "Booking page personal", included: true },
      { text: "Integrasi Google Calendar", included: true },
      { text: "Notifikasi email", included: true },
      { text: "Custom branding", included: true },
      { text: "Notifikasi WhatsApp", included: true },
      { text: "Analitik lanjutan", included: true },
      { text: "Priority support", included: true },
    ],
    isPopular: true,
    ctaText: "Pilih Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi khusus untuk tim besar & kebutuhan enterprise.",
    features: [
      { text: "Semua fitur Pro", included: true },
      { text: "SSO & keamanan lanjutan", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "API access penuh", included: true },
      { text: "Custom integration", included: true },
      { text: "SLA 99.9% uptime", included: true },
      { text: "Onboarding khusus", included: true },
      { text: "Invoice & pembayaran fleksibel", included: true },
    ],
    isPopular: false,
    ctaText: "Hubungi Sales",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Produk",
    links: [
      { label: "Fitur", href: "#fitur" },
      { label: "Harga", href: "#harga" },
      { label: "Integrasi", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Karir", href: "#" },
      { label: "Hubungi Kami", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
