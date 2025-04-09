export function CommunityRecipes() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Community Recipes</h1>
        <button id="share-recipe" class="btn-primary flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Share Recipe
        </button>
      </div>

      <div class="card p-6 mb-8">
        <div class="flex items-center space-x-4">
          <input type="text" id="search-recipes" class="input-field flex-1" placeholder="Search recipes...">
          <select id="filter-category" class="input-field w-48">
            <option value="">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snack">Snack</option>
          </select>
        </div>
      </div>

      <div id="recipes-container" class="grid-layout">
        <!-- Recipes will be added here dynamically -->
      </div>
    </div>
  `;

  container.innerHTML = content;

  const shareRecipeBtn = container.querySelector('#share-recipe');
  const searchInput = container.querySelector('#search-recipes');
  const filterSelect = container.querySelector('#filter-category');
  const recipesContainer = container.querySelector('#recipes-container');

  shareRecipeBtn.addEventListener('click', () => {
    const shareForm = `
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Share Your Recipe</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-2">Recipe Name</label>
            <input type="text" id="recipe-name" class="input-field" placeholder="Enter recipe name">
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Category</label>
            <select id="recipe-category" class="input-field">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Ingredients</label>
            <textarea id="recipe-ingredients" class="input-field" rows="4" placeholder="List ingredients..."></textarea>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Instructions</label>
            <textarea id="recipe-instructions" class="input-field" rows="6" placeholder="Add cooking instructions..."></textarea>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Upload Image</label>
            <input type="file" id="recipe-image" class="input-field" accept="image/*">
          </div>
          <button id="submit-recipe" class="btn-primary">Share Recipe</button>
        </div>
      </div>
    `;
    
    recipesContainer.innerHTML = shareForm;
    
    const submitRecipeBtn = container.querySelector('#submit-recipe');
    submitRecipeBtn.addEventListener('click', () => {
      const name = container.querySelector('#recipe-name').value;
      const category = container.querySelector('#recipe-category').value;
      const ingredients = container.querySelector('#recipe-ingredients').value;
      const instructions = container.querySelector('#recipe-instructions').value;
      const image = container.querySelector('#recipe-image').files[0];
      
      if (name && category && ingredients && instructions) {
        // In a real app, this would save to a database
        alert('Recipe shared successfully!');
        // Reset the form
        recipesContainer.innerHTML = '';
      } else {
        alert('Please fill in all required fields');
      }
    });
  });

  searchInput.addEventListener('input', (e) => {
    // In a real app, this would filter recipes
    console.log('Searching for:', e.target.value);
  });

  filterSelect.addEventListener('change', (e) => {
    // In a real app, this would filter recipes by category
    console.log('Filtering by:', e.target.value);
  });

  return container;
} 