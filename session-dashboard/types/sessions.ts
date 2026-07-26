export interface Metric {
    time: string;
    engagement: number;
    clarity: number;
    pacing: number;
}

export interface Session {
    id: number;
    student: string;
    date: string;
    metrics: Metric[];
}