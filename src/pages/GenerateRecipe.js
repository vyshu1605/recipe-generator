export function GenerateRecipe() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Generate Recipe</h1>
        <div class="flex space-x-4">
          <button id="add-to-grocery" class="btn-secondary flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add to Grocery List
          </button>
          <button id="save-recipe" class="btn-secondary flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            Save Recipe
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card">
          <h2 class="text-2xl font-bold mb-4">Select Ingredients</h2>
          <div class="flex mb-4">
            <input type="text" id="ingredient-search" class="input-field flex-1" placeholder="Search for ingredients...">
            <button id="add-ingredient" class="btn-primary ml-2">Add</button>
          </div>
          <div id="selected-ingredients" class="space-y-2">
            <!-- Selected ingredients will be added here -->
          </div>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold mb-4">Generated Recipe</h2>
          <div id="recipe-content" class="prose max-w-none">
            <p class="text-gray-600">Add at least 3-4 ingredients to generate a recipe.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = content;

  // Handle ingredient selection
  const ingredientSearch = container.querySelector('#ingredient-search');
  const addIngredientBtn = container.querySelector('#add-ingredient');
  const selectedIngredients = container.querySelector('#selected-ingredients');
  const recipeContent = container.querySelector('#recipe-content');
  const addToGroceryBtn = container.querySelector('#add-to-grocery');
  const saveRecipeBtn = container.querySelector('#save-recipe');

  let ingredients = [];

  addIngredientBtn.addEventListener('click', () => {
    const ingredient = ingredientSearch.value.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      updateSelectedIngredients();
      ingredientSearch.value = '';
    }
  });

  function updateSelectedIngredients() {
    selectedIngredients.innerHTML = ingredients.map(ingredient => `
      <div class="flex items-center justify-between bg-white p-2 rounded">
        <span>${ingredient}</span>
        <button class="text-red-500 hover:text-red-700" data-ingredient="${ingredient}">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `).join('');

    // Add event listeners to remove buttons
    selectedIngredients.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        const ingredient = button.getAttribute('data-ingredient');
        ingredients = ingredients.filter(i => i !== ingredient);
        updateSelectedIngredients();
      });
    });

    // Update recipe content based on ingredients
    if (ingredients.length >= 3) {
      generateRecipe();
    } else {
      recipeContent.innerHTML = '<p class="text-gray-600">Add at least 3-4 ingredients to generate a recipe.</p>';
    }
  }

  function generateRecipe() {
    // In a real app, this would call an API to generate a recipe
    recipeContent.innerHTML = `
      <h3 class="text-xl font-bold mb-2">Recipe for ${ingredients.join(', ')}</h3>
      <p class="mb-4">Here's a delicious recipe you can make with your selected ingredients!</p>
      <div class="space-y-4">
        <div>
          <h4 class="font-bold">Ingredients:</h4>
          <ul class="list-disc pl-5">
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 class="font-bold">Instructions:</h4>
          <ol class="list-decimal pl-5">
            <li>Prepare all ingredients</li>
            <li>Follow the cooking instructions</li>
            <li>Enjoy your meal!</li>
          </ol>
        </div>
      </div>
    `;
  }

  // Handle add to grocery list
  addToGroceryBtn.addEventListener('click', () => {
    if (ingredients.length === 0) {
      alert('Please add some ingredients first');
      return;
    }

    const groceryList = JSON.parse(localStorage.getItem('groceryList') || '[]');
    ingredients.forEach(ingredient => {
      if (!groceryList.some(item => item.name === ingredient)) {
        groceryList.push({
          name: ingredient,
          quantity: 1,
          unit: 'pcs',
          done: false
        });
      }
    });
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
    alert('Ingredients added to grocery list!');
  });

  // Handle save recipe
  saveRecipeBtn.addEventListener('click', () => {
    if (ingredients.length === 0) {
      alert('Please generate a recipe first');
      return;
    }

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    const recipe = {
      id: Date.now(),
      title: `Recipe with ${ingredients.join(', ')}`,
      ingredients: ingredients,
      instructions: recipeContent.innerHTML,
      date: new Date().toISOString()
    };
    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    alert('Recipe saved successfully!');
  });

  return container;
} 