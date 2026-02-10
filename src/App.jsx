import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
