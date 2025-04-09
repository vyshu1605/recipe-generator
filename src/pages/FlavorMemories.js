export function FlavorMemories() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Flavor Memories</h1>
        <button id="add-memory" class="btn-primary flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Memory
        </button>
      </div>

      <div id="memories-container" class="grid-layout">
        <!-- Memories will be added here dynamically -->
      </div>
    </div>
  `;

  container.innerHTML = content;

  const addMemoryBtn = container.querySelector('#add-memory');
  const memoriesContainer = container.querySelector('#memories-container');
  
  addMemoryBtn.addEventListener('click', () => {
    // In a real app, this would open a modal or navigate to a form
    const memoryForm = `
      <div class="card p-6">
        <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Add New Memory</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-2">Title</label>
            <input type="text" id="memory-title" class="input-field" placeholder="Enter memory title">
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Description</label>
            <textarea id="memory-description" class="input-field" rows="4" placeholder="Describe your memory..."></textarea>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Upload Image</label>
            <input type="file" id="memory-image" class="input-field" accept="image/*">
          </div>
          <button id="save-memory" class="btn-primary">Save Memory</button>
        </div>
      </div>
    `;
    
    memoriesContainer.innerHTML = memoryForm;
    
    const saveMemoryBtn = container.querySelector('#save-memory');
    saveMemoryBtn.addEventListener('click', () => {
      const title = container.querySelector('#memory-title').value;
      const description = container.querySelector('#memory-description').value;
      const image = container.querySelector('#memory-image').files[0];
      
      if (title && description) {
        // In a real app, this would save to a database
        alert('Memory saved successfully!');
        // Reset the form
        memoriesContainer.innerHTML = '';
      } else {
        alert('Please fill in all required fields');
      }
    });
  });

  return container;
} 