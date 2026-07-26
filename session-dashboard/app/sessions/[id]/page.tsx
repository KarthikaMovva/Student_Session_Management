"use client";
import { useParams } from "next/navigation";
import AuthGuard from "@/components/auth/AuthGaurd";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useSession } from "@/hooks/useSession";
import StatCard from "@/components/common/StatCard";
import MetricsChart from "@/components/session/MetricsChart";
import ChartEmptyState from "@/components/common/ChartEmptyState";



export default function SessionDetailPage() {


    const params = useParams();
    const id = Number(params.id);
    const {
        data: session,
        isLoading,
        error,
    } = useSession(id);



    if (isLoading) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <p>
                        Loading session...
                    </p>
                </DashboardLayout>
            </AuthGuard>
        );
    }



    if (error || !session) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <p className="text-red-500">
                        Session not found.
                    </p>
                </DashboardLayout>
            </AuthGuard>
        );
    }



    const metrics = session.metrics ?? [];
    const averageEngagement =
        Math.round(
            metrics.reduce(
                (sum, item) =>
                    sum + item.engagement,
                0
            ) /
            metrics.length
        );



    const averageClarity =
        Math.round(
            session.metrics.reduce(
                (sum, item) =>
                    sum + item.clarity,
                0
            ) /
            session.metrics.length
        );



    const averagePacing =
        Math.round(
            session.metrics.reduce(
                (sum, item) =>
                    sum + item.pacing,
                0
            ) /
            session.metrics.length
        );




    return (

        <AuthGuard>
            <DashboardLayout>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">
                            {session.student}
                        </h1>
                        <p className="text-muted-foreground">
                            Session Date:
                            {" "}
                            {session.date}
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <StatCard
                            title="Engagement"
                            value={`${averageEngagement}%`}
                        />
                        <StatCard
                            title="Clarity"
                            value={`${averageClarity}%`}
                        />
                        <StatCard
                            title="Pacing"
                            value={`${averagePacing}%`}
                        />
                    </div>




                    <div className="rounded-xl border bg-white p-6 space-y-4">
                        <h2 className="text-xl font-semibold">
                            Session Metrics Over Time
                        </h2>
                        {session.metrics?.length > 0 ? (
                            <MetricsChart
                                data={session.metrics}
                            />
                        ) : (
                            <ChartEmptyState />
                        )
                        }
                    </div>

                </div>
            </DashboardLayout>
        </AuthGuard>

    );

}