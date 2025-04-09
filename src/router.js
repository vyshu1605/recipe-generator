import { Dashboard } from './pages/Dashboard.js';
import { GenerateRecipe } from './pages/GenerateRecipe.js';
import { GroceryList } from './pages/GroceryList.js';
import { FlavorMemories } from './pages/FlavorMemories.js';
import { CommunityRecipes } from './pages/CommunityRecipes.js';
import { SavedRecipes } from './pages/SavedRecipes.js';
import { Profile } from './pages/Profile.js';
import { Login } from './pages/Login.js';

const routes = {
  '/': Login,
  '/dashboard': Dashboard,
  '/generate-recipe': GenerateRecipe,
  '/grocery-list': GroceryList,
  '/flavor-memories': FlavorMemories,
  '/community-recipes': CommunityRecipes,
  '/saved-recipes': SavedRecipes,
  '/profile': Profile,
};

const protectedRoutes = [
  '/dashboard',
  '/generate-recipe',
  '/grocery-list',
  '/flavor-memories',
  '/community-recipes',
  '/saved-recipes',
  '/profile'
];

export function createRouter() {
  const app = document.getElementById('app');
  let previousPath = null;
  
  function checkAuth() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  function getCurrentPath() {
    const hash = window.location.hash;
    return hash ? hash.substring(1) : '/';
  }

  function handleNavigation(path, isBackNavigation = false) {
    // Remove leading slash if present
    path = path.startsWith('/') ? path.substring(1) : path;
    
    // If trying to access protected route while not logged in
    if (protectedRoutes.includes('/' + path) && !checkAuth()) {
      window.location.hash = '/';
      return;
    }

    // If trying to access login page while logged in
    if (path === '/' && checkAuth()) {
      window.location.hash = '/dashboard';
      return;
    }

    // Update URL without triggering a page reload
    if (!isBackNavigation) {
      window.history.pushState({ path }, '', '#' + path);
    }
    
    // Store the previous path for back navigation
    previousPath = path;
    
    // Render the appropriate page
    const Page = routes['/' + path] || Login;
    app.innerHTML = '';
    app.appendChild(Page());
  }

  // Handle browser back/forward
  window.addEventListener('popstate', (event) => {
    const path = getCurrentPath();
    
    // If going back to root while logged in, redirect to dashboard
    if (path === '/' && checkAuth()) {
      window.location.hash = '/dashboard';
      return;
    }

    // If going back from a feature page, go to dashboard
    if (protectedRoutes.includes('/' + path) && previousPath && 
        protectedRoutes.includes('/' + previousPath) && path !== '/dashboard') {
      window.location.hash = '/dashboard';
      return;
    }

    handleNavigation(path, true);
  });

  // Handle initial load
  window.addEventListener('load', () => {
    const path = getCurrentPath();
    // Only redirect to dashboard if on root path while logged in
    if (path === '/' && checkAuth()) {
      window.location.hash = '/dashboard';
    } else {
      handleNavigation(path);
    }
  });

  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const path = getCurrentPath();
    // Only redirect to dashboard if trying to access root while logged in
    if (path === '/' && checkAuth()) {
      window.location.hash = '/dashboard';
    } else {
      handleNavigation(path);
    }
  });

  // Add back button functionality to all pages
  function addBackButton(page) {
    const backButton = page.querySelector('#back-btn');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.hash = '/dashboard';
      });
    }
  }

  return {
    navigate(path) {
      handleNavigation(path);
    },
    addBackButton
  };
} 