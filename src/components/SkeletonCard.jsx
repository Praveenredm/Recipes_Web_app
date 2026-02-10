const SkeletonCard = () => {
    return (
        <div className="card overflow-hidden animate-pulse">
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
                {/* Title */}
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

                {/* Cuisine */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
