"use client";

import { Session } from "@/types/sessions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SessionsTableProps {
    sessions: Session[];
}

export default function SessionsTable({
    sessions,
}: SessionsTableProps) {

    const router = useRouter();


    return (
        <div className="rounded-xl border bg-white">
            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="border-b bg-slate-50">
                        <tr>
                            <th className="p-4 text-left">
                                Student
                            </th>
                            <th className="p-4 text-left">
                                Date
                            </th>
                            <th className="p-4 text-left">
                                Metrics Samples
                            </th>
                            <th className="p-4 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        {sessions.map((session) => (
                            <tr
                                key={session.id}
                                className="border-b hover:bg-slate-50"
                            >
                                <td className="p-4">
                                    {session.student}
                                </td>
                                <td className="p-4">
                                    {session.date}
                                </td>
                                <td className="p-4">
                                    {session.metrics.length}
                                </td>
                                <td className="p-4">
                                    <Button
                                        size="sm"
                                        onClick={() =>
                                            router.push(
                                                `/sessions/${session.id}`
                                            )
                                        }
                                    >
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
}