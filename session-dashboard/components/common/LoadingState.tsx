export default function LoadingState() {

    return (

        <div className="flex min-h-[200px] items-center justify-center">
            <div className="space-y-3 text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-sm text-muted-foreground">
                    Loading data...
                </p>
            </div>
        </div>

    );

}