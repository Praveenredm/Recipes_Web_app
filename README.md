# 🍳 Recipes Web App

A production-ready React application built with Vite, React, and Tailwind CSS that displays delicious recipes from around the world.

## ✨ Features

### Core Features
- 📱 **Responsive Recipe Grid** - Mobile-first design that adapts from 1 to 4 columns
- 🔍 **Smart Search** - Debounced search functionality (500ms) for smooth UX
- 🎯 **Cuisine Filter** - Filter recipes by cuisine type
- 🌓 **Dark Mode** - Full dark mode support with localStorage persistence
- 📄 **Recipe Details** - Comprehensive recipe information with ingredients and instructions
- ⚡ **Loading States** - Skeleton loaders for better perceived performance
- ❌ **Error Handling** - Graceful error states with retry functionality
- 🎨 **Modern UI** - Clean design with hover effects and smooth animations

### Bonus Features
- Skeleton card loaders during data fetching
- Search query debouncing for performance
- System theme preference detection
- Empty state handling
- Responsive navigation
- Accessibility-focused design

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Fetch API** - Data fetching
- **DummyJSON API** - Recipe data source

## 📁 Folder Structure

```
Blue labs/
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx          # Recipe card component
│   │   ├── Loader.jsx              # Loading spinner
│   │   ├── SkeletonCard.jsx        # Skeleton loader
│   │   ├── Error.jsx               # Error display
│   │   ├── SearchBar.jsx           # Search input
│   │   ├── FilterBar.jsx           # Cuisine filter
│   │   └── DarkModeToggle.jsx      # Theme toggle
│   │
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   └── RecipeDetails.jsx      # Recipe details page
│   │
│   ├── services/
│   │   └── api.js                  # API service layer
│   │
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark mode context
│   │
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
│
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies
└── index.html                      # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd "c:\Users\ASUS\Desktop\all apps\2026\Blue labs"
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173/
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Features in Detail

### Home Page (`/`)
- **Recipe Grid**: Responsive grid layout (1→2→3→4 columns)
- **Search Bar**: Real-time search with 500ms debounce
- **Cuisine Filter**: Dropdown to filter by cuisine type
- **Dark Mode Toggle**: Switch between light and dark themes
- **Loading States**: Skeleton cards while fetching data
- **Error Handling**: Retry button on API failures
- **Empty State**: Friendly message when no recipes found

### Recipe Details Page (`/recipe/:id`)
- **Hero Image**: Large recipe image with difficulty badge
- **Metadata**: Cuisine, rating, prep time, cook time, servings, calories
- **Tags**: Recipe category tags
- **Ingredients**: Checklist-style ingredients list
- **Instructions**: Numbered step-by-step instructions
- **Back Button**: Navigate back to home page

### Components

#### RecipeCard
- Displays recipe preview with image, name, cuisine, difficulty, and rating
- Hover effects with scale transformation
- Click to navigate to details page
- Image fallback for broken URLs

#### SearchBar
- Debounced search input (500ms delay)
- Clear button when text is entered
- Search icon indicator

#### FilterBar
- Dropdown select for cuisine filtering
- "All Cuisines" option to reset filter
- Custom styled dropdown

#### DarkModeToggle
- Sun/moon icon toggle
- Persists preference to localStorage
- Smooth theme transitions

#### Loader
- Customizable size (small, medium, large)
- Spinning animation
- Theme-aware colors

#### SkeletonCard
- Matches RecipeCard layout
- Pulsing animation
- Shows during initial load

#### Error
- Error icon and message
- Optional retry button
- Customizable error text

## 🔌 API Integration

The app uses the [DummyJSON Recipes API](https://dummyjson.com):

- **Get all recipes**: `GET https://dummyjson.com/recipes`
- **Get recipe by ID**: `GET https://dummyjson.com/recipes/{id}`
- **Search recipes**: `GET https://dummyjson.com/recipes/search?q={query}`

All API calls are centralized in `src/services/api.js` with proper error handling.

## 🎨 Styling

### Tailwind CSS Configuration
- Custom color palette (primary colors)
- Dark mode support via `class` strategy
- Custom animations (fade-in, slide-up)
- Responsive breakpoints
- Custom scrollbar styling

### Design Highlights
- Mobile-first responsive design
- Smooth transitions and animations
- Consistent spacing and typography
- Accessible color contrast
- Modern card-based layout

## 🧪 Code Quality

### Best Practices Implemented
✅ **Clean Architecture** - Separation of concerns (components, pages, services)  
✅ **Reusable Components** - DRY principle throughout  
✅ **Error Handling** - Graceful error states with retry  
✅ **Loading States** - Skeleton loaders for better UX  
✅ **Responsive Design** - Mobile-first approach  
✅ **Accessibility** - Semantic HTML, ARIA labels  
✅ **Performance** - Debounced search, lazy loading  
✅ **State Management** - React hooks (useState, useEffect, useContext)  
✅ **Routing** - React Router for navigation  
✅ **Code Comments** - JSDoc comments for API functions  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The app fetches real data from DummyJSON API
- Dark mode preference is saved to localStorage
- Search is debounced to reduce API calls
- All images have fallback URLs
- The app is production-ready and can be deployed

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service



