import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="card cursor-pointer overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
        >
            {/* Recipe Image */}
            <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Recipe+Image';
                    }}
                />
                {/* Difficulty Badge */}
                <div className="absolute top-2 right-2">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${recipe.difficulty === 'Easy'
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
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {recipe.name}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                        </svg>
                        {recipe.cuisine}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < Math.floor(recipe.rating)
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
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        {recipe.rating.toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
