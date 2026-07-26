"use client";

import AuthGuard from "@/components/auth/AuthGaurd";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/common/StatCard";
import SessionsTable from "@/components/session/SessionsTable";

import { useSessions } from "@/hooks/useSessions";
import { useState } from "react";
import SessionFilters from "@/components/session/SessionFilters";
import EmptyState from "@/components/common/EmptyState";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";


export default function DashboardPage() {

    const [selectedStudent, setSelectedStudent] = useState("all");

    const [fromDate, setFromDate] = useState<Date>();

    const [toDate, setToDate] = useState<Date>();


    const {
        data: sessions,
        isLoading,
        error,
    } = useSessions();

    const students = Array.from(
        new Set(
            sessions?.map(
                (session) => session.student
            )
        )
    );

    const filteredSessions = sessions?.filter((session) => {
        const matchesStudent =
            selectedStudent === "all" ||
            session.student === selectedStudent;

        const sessionDate = new Date(session.date);

        const matchesFrom =
            !fromDate ||
            sessionDate >= fromDate;

        const matchesTo =
            !toDate ||
            sessionDate <= toDate;

        return (
            matchesStudent &&
            matchesFrom &&
            matchesTo
        );
    });



    if (isLoading) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <LoadingState />
                </DashboardLayout>
            </AuthGuard>
        );
    }



    if (error) {
        return (
            <AuthGuard>
                <DashboardLayout>
                    <ErrorState
                        message="Failed to load session data."
                    />
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

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                            Sessions
                        </h3>
                        <SessionFilters
                            students={students}
                            selectedStudent={selectedStudent}
                            setSelectedStudent={setSelectedStudent}
                            fromDate={fromDate}
                            setFromDate={setFromDate}
                            toDate={toDate}
                            setToDate={setToDate}
                        />
                        {filteredSessions &&
                            filteredSessions.length > 0 ? (
                            <SessionsTable
                                sessions={filteredSessions ?? []}
                            />
                        ) : (
                            <EmptyState />
                        )
                        }
                    </div>
                </div>
            </DashboardLayout>
        </AuthGuard>

    );
}