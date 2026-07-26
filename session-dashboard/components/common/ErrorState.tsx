interface ErrorStateProps {
    message?: string;
}


export default function ErrorState({
    message = "Something went wrong."
}: ErrorStateProps) {


    return (

        <div className="flex min-h-[200px] items-center justify-center">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                <h3 className="font-semibold text-red-600">
                    Error
                </h3>
                <p className="mt-2 text-sm text-red-500">
                    {message}
                </p>
            </div>
        </div>

    );

}