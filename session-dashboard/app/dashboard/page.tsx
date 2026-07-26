"use client";

import AuthGuard from "@/components/auth/AuthGaurd";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    const { username, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.replace("/login");
    };

    return (
        <AuthGuard>
            <main className="p-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>

                    <Button
                        variant="destructive"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>

                <p className="mt-6">
                    Welcome, <strong>{username}</strong>
                </p>
            </main>
        </AuthGuard>
    );
}