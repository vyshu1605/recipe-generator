export function Dashboard() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Dashboard</h1>
        <button id="logout-btn" class="btn-secondary flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout
        </button>
      </div>

      <div class="welcome-message mb-8">
        <h2 class="text-2xl font-bold mb-2">Welcome back! Ready to create something delicious?</h2>
        <p class="text-gray-600">Explore your recipes, create new ones, and discover culinary inspiration.</p>
      </div>

      <div class="grid-layout">
        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Generate Recipe</h2>
          <p class="text-gray-700 mb-4">Create personalized recipes based on your available ingredients.</p>
          <button class="btn-primary" data-route="/generate-recipe">Get Started</button>
        </div>

        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Grocery List</h2>
          <p class="text-gray-700 mb-4">Manage your shopping list with quantities and units. Download and share with family.</p>
          <button class="btn-primary" data-route="/grocery-list">View List</button>
        </div>

        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Flavor Memories</h2>
          <p class="text-gray-700 mb-4">Document and relive your favorite culinary moments with photos and stories.</p>
          <button class="btn-primary" data-route="/flavor-memories">View Memories</button>
        </div>

        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Community Recipes</h2>
          <p class="text-gray-700 mb-4">Discover and share recipes with our vibrant community of food enthusiasts.</p>
          <button class="btn-primary" data-route="/community-recipes">Explore</button>
        </div>

        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Saved Recipes</h2>
          <p class="text-gray-700 mb-4">Access your favorite recipes anytime, anywhere. Organize and manage your collection.</p>
          <button class="btn-primary" data-route="/saved-recipes">View Saved</button>
        </div>

        <div class="feature-box">
          <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Profile</h2>
          <p class="text-gray-700 mb-4">Manage your account settings and preferences.</p>
          <button class="btn-primary" data-route="/profile">View Profile</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = content;

  // Handle navigation
  container.querySelectorAll('button[data-route]').forEach(button => {
    button.addEventListener('click', () => {
      const route = button.getAttribute('data-route');
      window.location.hash = route;
    });
  });

  // Handle logout
  const logoutBtn = container.querySelector('#logout-btn');
  logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      window.location.hash = '/';
    }
  });

  return container;
} 