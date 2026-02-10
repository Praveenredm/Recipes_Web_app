const Error = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="text-center max-w-md">
                {/* Error Icon */}
                <svg
                    className="w-16 h-16 mx-auto mb-4 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                {/* Error Message */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Oops! Something went wrong
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {message || 'Failed to load data. Please try again.'}
                </p>

                {/* Retry Button */}
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="btn-primary inline-flex items-center"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
};

export default Error;
