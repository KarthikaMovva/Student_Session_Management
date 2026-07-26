"use client";

import Navbar from "@/components/layout/Navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            <main className="p-6">
                {children}
            </main>
        </div>
    );
}