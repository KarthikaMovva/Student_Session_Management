"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
    const router = useRouter();

    const { username, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.replace("/login");
    };

    return (
        <header className="border-b bg-white">
            <div className="flex h-16 items-center justify-between px-6">
                <h1 className="text-xl font-bold">
                    Session Dashboard
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                        {username}
                    </span>
                    <Button
                        variant="outline"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    );
}