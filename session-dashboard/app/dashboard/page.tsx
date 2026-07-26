"use client";

import AuthGuard from "@/components/auth/AuthGaurd";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/common/StatCard";


export default function DashboardPage() {

    return (

        <AuthGuard>
            <DashboardLayout>
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Dashboard
                        </h2>
                        <p className="text-muted-foreground">
                            Monitor student session evaluations.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <StatCard
                            title="Total Sessions"
                            value="20"
                        />
                        <StatCard
                            title="Average Engagement"
                            value="85%"
                        />
                        <StatCard
                            title="Students"
                            value="6"
                        />
                    </div>
                </div>
            </DashboardLayout>
        </AuthGuard>

    );
}