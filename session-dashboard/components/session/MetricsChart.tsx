"use client";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { Metric } from "@/types/sessions";


interface MetricsChartProps {
    data: Metric[];
}



export default function MetricsChart({
    data,
}: MetricsChartProps) {


    return (

        <div className="h-[350px] w-full">
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                    />
                    <XAxis
                        dataKey="time"
                    />
                    <YAxis
                        domain={[0, 100]}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="engagement"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="clarity"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="pacing"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}