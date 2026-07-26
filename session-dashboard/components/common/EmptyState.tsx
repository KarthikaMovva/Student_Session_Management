export default function EmptyState() {

    return (

        <div className="rounded-xl border p-8 text-center">
            <h3 className="text-lg font-semibold">
                No sessions available
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
                No sessions match your current filters.
                Try selecting a different student or date range.
            </p>
        </div>

    );

}