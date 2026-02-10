const FilterBar = ({ cuisines, selectedCuisine, onFilterChange }) => {
    return (
        <div className="relative">
            <label htmlFor="cuisine-filter" className="sr-only">
                Filter by cuisine
            </label>
            <select
                id="cuisine-filter"
                value={selectedCuisine}
                onChange={(e) => onFilterChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 cursor-pointer"
            >
                <option value="">All Cuisines</option>
                {cuisines.map((cuisine) => (
                    <option key={cuisine} value={cuisine}>
                        {cuisine}
                    </option>
                ))}
            </select>

            {/* Dropdown Icon */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
};

export default FilterBar;
