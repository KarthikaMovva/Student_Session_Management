"use client";

import AuthGuard from "@/components/auth/AuthGaurd";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/common/StatCard";
import SessionsTable from "@/components/session/SessionsTable";

import { useSessions } from "@/hooks/useSessions";


export default function DashboardPage() {


    const {
        data: sessions,
        isLoading,
        error,
    } = useSessions();



    if (isLoading) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <p>
                        Loading sessions...
                    </p>
                </DashboardLayout>
            </AuthGuard>
        );
    }



    if (error) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <p className="text-red-500">
                        Failed to load sessions.
                    </p>
                </DashboardLayout>
            </AuthGuard>
        );
    }



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
                            value={String(sessions?.length ?? 0)}
                        />
                        <StatCard
                            title="Students"
                            value={
                                String(
                                    new Set(
                                        sessions?.map(
                                            (s) => s.student
                                        )
                                    ).size
                                )
                            }
                        />
                        <StatCard
                            title="Metric Samples"
                            value={
                                String(
                                    sessions?.reduce(
                                        (total, session) =>
                                            total +
                                            session.metrics.length,
                                        0
                                    )
                                )
                            }
                        />
                    </div>



                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            Sessions
                        </h3>
                        {sessions && (
                            <SessionsTable
                                sessions={sessions}
                            />
                        )}
                    </div>
                </div>
            </DashboardLayout>
        </AuthGuard>

    );
}