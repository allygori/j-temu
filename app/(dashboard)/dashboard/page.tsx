"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Calendar, 
    Clock, 
    TrendingUp, 
    Users, 
    Video, 
    MoreHorizontal,
    ArrowUpRight,
    ArrowDownRight,
    Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    {
        title: "Total Appointments",
        value: "128",
        change: "+12.5%",
        trend: "up",
        icon: Calendar,
        color: "text-blue-600 bg-blue-50 dark:bg-blue-900/10",
    },
    {
        title: "New Customers",
        value: "42",
        change: "+8.2%",
        trend: "up",
        icon: Users,
        color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/10",
    },
    {
        title: "Scheduled Hours",
        value: "356h",
        change: "-2.4%",
        trend: "down",
        icon: Clock,
        color: "text-amber-600 bg-amber-50 dark:bg-amber-900/10",
    },
    {
        title: "Conversion Rate",
        value: "24.8%",
        change: "+4.1%",
        trend: "up",
        icon: TrendingUp,
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10",
    },
];

const appointments = [
    {
        id: "1",
        customer: "Budi Santoso",
        email: "budi@gmail.com",
        service: "Konsultasi Bisnis",
        time: "10:00 AM - 11:00 AM",
        date: "Besok, 15 Mar",
        status: "Confirmed",
        type: "Online",
    },
    {
        id: "2",
        customer: "Siti Aminah",
        email: "siti@perusahaan.id",
        service: "Review Project",
        time: "02:00 PM - 03:00 PM",
        date: "16 Mar 2026",
        status: "Pending",
        type: "Online",
    },
    {
        id: "3",
        customer: "Deddy Setiawan",
        email: "deddy@setiawan.com",
        service: "Final Interview",
        time: "09:30 AM - 10:30 AM",
        date: "17 Mar 2026",
        status: "Confirmed",
        type: "In Person",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Halo, <span className="gradient-text">Admin!</span>
                </h1>
                <p className="text-gray-500 dark:text-zinc-400 font-medium">
                    Inilah ringkasan bisnismu untuk hari ini.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className="border-gray-50 dark:border-zinc-900 shadow-sm hover:shadow-md transition-shadow group">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider italic">
                                {stat.title}
                            </CardTitle>
                            <div className={`p-2 rounded-xl border border-transparent group-hover:border-current/10 transition-colors ${stat.color}`}>
                                <stat.icon className="h-4 w-4" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="flex items-center gap-1 mt-1 text-xs font-bold">
                                {stat.trend === "up" ? (
                                    <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                                ) : (
                                    <ArrowDownRight className="h-3 w-3 text-red-600" />
                                )}
                                <span className={stat.trend === "up" ? "text-emerald-600" : "text-red-600"}>
                                    {stat.change}
                                </span>
                                <span className="text-gray-400 dark:text-zinc-600 font-medium lowercase">sejak bulan lalu</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-7">
                <Card className="lg:col-span-4 border-gray-50 dark:border-zinc-900 shadow-xl shadow-indigo-500/[0.02] bg-white dark:bg-zinc-950 overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 dark:border-zinc-900 py-6">
                        <div className="space-y-1">
                            <CardTitle className="text-xl font-bold">Upcoming Appointments</CardTitle>
                            <CardDescription className="text-gray-500 dark:text-zinc-400">
                                Jadwal pertemuan mendatang yang telah dikonfirmasi.
                            </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-lg h-9 font-semibold gap-2">
                            Lihat Semua <ArrowUpRight className="h-3 w-3" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-gray-50 dark:divide-zinc-900">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="p-6 flex items-center justify-between group hover:bg-gray-50/50 dark:hover:bg-zinc-900/20 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-gray-100 dark:bg-zinc-900 flex flex-col items-center justify-center text-center">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Mar</span>
                                            <span className="text-lg font-black text-indigo-600 leading-none">15</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                                {apt.customer}
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                                    apt.type === 'Online' 
                                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' 
                                                    : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20'
                                                }`}>
                                                    {apt.type}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-zinc-400 flex items-center gap-2 font-medium">
                                                <Video className="h-3 w-3" /> {apt.service}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white flex items-center justify-end gap-1.5">
                                            <Clock className="h-3 w-3 text-indigo-500" /> {apt.time}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-zinc-500 font-medium">
                                            {apt.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-gray-50 dark:border-zinc-900 shadow-xl shadow-indigo-500/[0.02] bg-white dark:bg-zinc-950 overflow-hidden">
                    <CardHeader className="border-b border-gray-50 dark:border-zinc-900 py-6">
                        <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
                        <CardDescription>Akses cepat ke fitur yang sering digunakan.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 grid gap-4">
                        <Button className="w-full h-12 justify-start gap-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/20 font-bold">
                            <div className="p-1.5 bg-white/10 rounded-lg">
                                <Calendar className="h-4 w-4" />
                            </div>
                            Create New Booking Link
                        </Button>
                        <Button variant="outline" className="w-full h-12 justify-start gap-4 border-gray-100 dark:border-zinc-800 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 font-bold">
                            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                                <Users className="h-4 w-4" />
                            </div>
                            Invite Team Member
                        </Button>
                        <Button variant="outline" className="w-full h-12 justify-start gap-4 border-gray-100 dark:border-zinc-800 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 font-bold">
                            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                                <Settings className="h-4 w-4" />
                            </div>
                            Configure Availability
                        </Button>
                        
                        <div className="mt-4 pt-6 border-t border-gray-50 dark:border-zinc-900">
                            <h4 className="text-xs font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4 italic">Recent Activity</h4>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="h-8 w-8 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center text-indigo-500">
                                            <TrendingUp className="h-3 w-3" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">New booking received</p>
                                            <p className="text-[10px] text-gray-500 dark:text-zinc-500 font-medium uppercase tracking-tighter">2 mins ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
