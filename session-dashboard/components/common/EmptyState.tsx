export default function EmptyState() {

    return (

        <div className="rounded-xl border bg-white p-8 text-center">
            <h3 className="text-lg font-semibold">
                No sessions found
            </h3>
            <p className="text-sm text-muted-foreground">
                Try changing your filters.
            </p>
        </div>

    );

}