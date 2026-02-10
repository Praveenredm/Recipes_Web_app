const API_BASE_URL = 'https://dummyjson.com';

/**
 * Fetch all recipes from the API
 * @returns {Promise<Object>} Recipe data with recipes array and metadata
 */
export const fetchRecipes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

/**
 * Fetch a single recipe by ID
 * @param {number|string} id - Recipe ID
 * @returns {Promise<Object>} Recipe details
 */
export const fetchRecipeById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipe ${id}:`, error);
        throw error;
    }
};

/**
 * Search recipes by name
 * @param {string} query - Search query
 * @returns {Promise<Object>} Filtered recipe data
 */
export const searchRecipes = async (query) => {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error searching recipes:', error);
        throw error;
    }
};
