export function SavedRecipes() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Saved Recipes</h1>
        <div class="flex space-x-4">
          <button id="sort-btn" class="btn-secondary flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
            </svg>
            Sort
          </button>
          <button id="filter-btn" class="btn-secondary flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div id="saved-recipes-container" class="grid-layout">
        <!-- Saved recipes will be added here dynamically -->
      </div>
    </div>
  `;

  container.innerHTML = content;

  const sortBtn = container.querySelector('#sort-btn');
  const filterBtn = container.querySelector('#filter-btn');
  const savedRecipesContainer = container.querySelector('#saved-recipes-container');

  sortBtn.addEventListener('click', () => {
    const sortOptions = `
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Sort Recipes</h2>
        <div class="space-y-4">
          <label class="flex items-center">
            <input type="radio" name="sort" value="date" class="form-radio text-purple-600" checked>
            <span class="ml-2">Date Added (Newest First)</span>
          </label>
          <label class="flex items-center">
            <input type="radio" name="sort" value="name" class="form-radio text-purple-600">
            <span class="ml-2">Name (A-Z)</span>
          </label>
          <label class="flex items-center">
            <input type="radio" name="sort" value="category" class="form-radio text-purple-600">
            <span class="ml-2">Category</span>
          </label>
          <button id="apply-sort" class="btn-primary">Apply Sort</button>
        </div>
      </div>
    `;
    
    savedRecipesContainer.innerHTML = sortOptions;
    
    const applySortBtn = container.querySelector('#apply-sort');
    applySortBtn.addEventListener('click', () => {
      const selectedSort = container.querySelector('input[name="sort"]:checked').value;
      // In a real app, this would sort the recipes
      alert(`Sorting by ${selectedSort}`);
      savedRecipesContainer.innerHTML = '';
    });
  });

  filterBtn.addEventListener('click', () => {
    const filterOptions = `
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Filter Recipes</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-2">Category</label>
            <select id="filter-category" class="input-field">
              <option value="">All Categories</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Date Range</label>
            <select id="filter-date" class="input-field">
              <option value="">All Time</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          <button id="apply-filter" class="btn-primary">Apply Filter</button>
        </div>
      </div>
    `;
    
    savedRecipesContainer.innerHTML = filterOptions;
    
    const applyFilterBtn = container.querySelector('#apply-filter');
    applyFilterBtn.addEventListener('click', () => {
      const category = container.querySelector('#filter-category').value;
      const dateRange = container.querySelector('#filter-date').value;
      // In a real app, this would filter the recipes
      alert(`Filtering by category: ${category}, date range: ${dateRange}`);
      savedRecipesContainer.innerHTML = '';
    });
  });

  return container;
} 