export function GroceryList() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Grocery List</h1>
        <button id="download-btn" class="btn-secondary flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download List
        </button>
      </div>

      <div class="card p-6 mb-8">
        <div class="flex items-center space-x-4 mb-6">
          <input type="text" id="new-item" class="input-field flex-1" placeholder="Add new item...">
          <select id="unit-select" class="input-field w-32">
            <option value="pcs">pcs</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="cup">cup</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
          </select>
          <button id="add-item" class="btn-primary">Add</button>
        </div>

        <div id="grocery-items" class="space-y-4">
          <!-- Items will be added here -->
        </div>
      </div>
    </div>
  `;

  container.innerHTML = content;

  const newItemInput = container.querySelector('#new-item');
  const unitSelect = container.querySelector('#unit-select');
  const addItemBtn = container.querySelector('#add-item');
  const groceryItems = container.querySelector('#grocery-items');
  const downloadBtn = container.querySelector('#download-btn');

  function loadGroceryList() {
    const items = JSON.parse(localStorage.getItem('groceryList') || '[]');
    groceryItems.innerHTML = items.map(item => `
      <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
        <div class="flex items-center space-x-4">
          <input type="checkbox" class="w-5 h-5 text-purple-600 rounded">
          <span class="text-gray-800">${item.name}</span>
          <span class="text-gray-500">${item.quantity} ${item.unit}</span>
        </div>
        <button class="text-red-500 hover:text-red-700" onclick="removeItem('${item.id}')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    `).join('');
  }

  addItemBtn.addEventListener('click', () => {
    const name = newItemInput.value.trim();
    const unit = unitSelect.value;
    
    if (name) {
      const items = JSON.parse(localStorage.getItem('groceryList') || '[]');
      items.push({
        id: Date.now().toString(),
        name,
        unit,
        quantity: 1
      });
      localStorage.setItem('groceryList', JSON.stringify(items));
      newItemInput.value = '';
      loadGroceryList();
    }
  });

  function removeItem(id) {
    const items = JSON.parse(localStorage.getItem('groceryList') || '[]');
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem('groceryList', JSON.stringify(updatedItems));
    loadGroceryList();
  }

  downloadBtn.addEventListener('click', () => {
    const items = JSON.parse(localStorage.getItem('groceryList') || '[]');
    const content = items.map(item => `${item.name} - ${item.quantity} ${item.unit}`).join('\\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grocery-list.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Load initial grocery list
  loadGroceryList();

  return container;
} 