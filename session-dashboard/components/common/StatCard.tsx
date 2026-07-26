interface StatCardProps {
    title: string;
    value: string;
}

export default function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">
                {title}
            </p>
            <h3 className="mt-2 text-3xl font-bold">
                {value}
            </h3>
        </div>
    );
}