"use client";

import { useAuthStore } from "@/store/authStore";

export default function DashboardPage() {
    const { username } = useAuthStore();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mt-4">
                Welcome, {username}
            </p>
        </div>
    );
}