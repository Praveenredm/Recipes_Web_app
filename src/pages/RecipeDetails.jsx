import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecipeById } from '../services/api';
import Loader from '../components/Loader';
import Error from '../components/Error';
import DarkModeToggle from '../components/DarkModeToggle';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadRecipe();
    }, [id]);

    const loadRecipe = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchRecipeById(id);
            setRecipe(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    const handleRetry = () => {
        loadRecipe();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen">
                <header className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="container-custom py-6 flex items-center justify-between">
                        <button
                            onClick={handleBack}
                            className="btn-secondary inline-flex items-center"
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
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Recipes
                        </button>
                        <DarkModeToggle />
                    </div>
                </header>
                <Error message={error} onRetry={handleRetry} />
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
                <div className="container-custom py-6 flex items-center justify-between">
                    <button
                        onClick={handleBack}
                        className="btn-secondary inline-flex items-center"
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
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Recipes
                    </button>
                    <DarkModeToggle />
                </div>
            </header>

            {/* Main Content */}
            <main className="container-custom py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Image */}
                    <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600?text=Recipe+Image';
                            }}
                        />
                        {/* Difficulty Badge */}
                        <div className="absolute top-4 right-4">
                            <span
                                className={`px-4 py-2 rounded-full text-sm font-semibold ${recipe.difficulty === 'Easy'
                                        ? 'bg-green-500 text-white'
                                        : recipe.difficulty === 'Medium'
                                            ? 'bg-yellow-500 text-white'
                                            : 'bg-red-500 text-white'
                                    }`}
                            >
                                {recipe.difficulty}
                            </span>
                        </div>
                    </div>

                    {/* Recipe Info */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8 transition-colors duration-300">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {recipe.name}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600 dark:text-gray-400">
                            {/* Cuisine */}
                            <div className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                </svg>
                                <span className="font-medium">{recipe.cuisine}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center">
                                <div className="flex items-center mr-2">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-5 h-5 ${index < Math.floor(recipe.rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300 dark:text-gray-600'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-medium">{recipe.rating.toFixed(1)}</span>
                            </div>

                            {/* Prep Time */}
                            <div className="flex items-center">
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
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="font-medium">{recipe.prepTimeMinutes} min prep</span>
                            </div>

                            {/* Cook Time */}
                            <div className="flex items-center">
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
                                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                    />
                                </svg>
                                <span className="font-medium">{recipe.cookTimeMinutes} min cook</span>
                            </div>

                            {/* Servings */}
                            <div className="flex items-center">
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
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="font-medium">{recipe.servings} servings</span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center">
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                                <span className="font-medium">{recipe.caloriesPerServing} cal</span>
                            </div>
                        </div>

                        {/* Tags */}
                        {recipe.tags && recipe.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {recipe.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Ingredients */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <svg
                                className="w-6 h-6 mr-2 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                            Ingredients
                        </h2>
                        <ul className="space-y-3">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex items-start text-gray-700 dark:text-gray-300"
                                >
                                    <svg
                                        className="w-5 h-5 mr-3 mt-0.5 text-primary-600 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <svg
                                className="w-6 h-6 mr-2 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Instructions
                        </h2>
                        <ol className="space-y-4">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full font-bold mr-4">
                                        {index + 1}
                                    </span>
                                    <p className="text-gray-700 dark:text-gray-300 pt-1">
                                        {instruction}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RecipeDetails;
