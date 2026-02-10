import { useState, useEffect, useCallback } from 'react';
import { fetchRecipes, searchRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import SkeletonCard from '../components/SkeletonCard';
import Error from '../components/Error';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [cuisines, setCuisines] = useState([]);

    // Fetch recipes on mount
    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchRecipes();
            setRecipes(data.recipes);
            setFilteredRecipes(data.recipes);

            // Extract unique cuisines
            const uniqueCuisines = [...new Set(data.recipes.map((r) => r.cuisine))];
            setCuisines(uniqueCuisines.sort());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle search
    const handleSearch = useCallback(
        async (query) => {
            setSearchQuery(query);

            if (!query.trim()) {
                // Reset to all recipes if search is empty
                applyFilters(recipes, selectedCuisine);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                const data = await searchRecipes(query);
                applyFilters(data.recipes, selectedCuisine);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        },
        [recipes, selectedCuisine]
    );

    // Handle cuisine filter
    const handleFilterChange = (cuisine) => {
        setSelectedCuisine(cuisine);
        applyFilters(searchQuery ? filteredRecipes : recipes, cuisine);
    };

    // Apply filters
    const applyFilters = (recipesToFilter, cuisine) => {
        let filtered = recipesToFilter;

        if (cuisine) {
            filtered = filtered.filter((recipe) => recipe.cuisine === cuisine);
        }

        setFilteredRecipes(filtered);
    };

    // Retry handler
    const handleRetry = () => {
        loadRecipes();
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Recipes Web App
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">
                                Discover delicious recipes from around the world
                            </p>
                        </div>
                        <DarkModeToggle />
                    </div>

                    {/* Search and Filter */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <SearchBar onSearch={handleSearch} />
                        </div>
                        <div>
                            <FilterBar
                                cuisines={cuisines}
                                selectedCuisine={selectedCuisine}
                                onFilterChange={handleFilterChange}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container-custom py-8">
                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && !loading && <Error message={error} onRetry={handleRetry} />}

                {/* Empty State */}
                {!loading && !error && filteredRecipes.length === 0 && (
                    <div className="text-center py-12">
                        <svg
                            className="w-16 h-16 mx-auto mb-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No recipes found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}

                {/* Recipes Grid */}
                {!loading && !error && filteredRecipes.length > 0 && (
                    <>
                        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Showing {filteredRecipes.length} recipe
                            {filteredRecipes.length !== 1 ? 's' : ''}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredRecipes.map((recipe) => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                        </div>
                    </>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12 transition-colors duration-300">
                <div className="container-custom py-6 text-center text-gray-600 dark:text-gray-400">
                    <p>
                        Built with React, Vite, and Tailwind CSS • Data from{' '}
                        <a
                            href="https://dummyjson.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                        >
                            DummyJSON
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
