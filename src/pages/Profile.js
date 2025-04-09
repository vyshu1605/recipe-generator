export function Profile() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="flex justify-between items-center mb-8">
        <h1 class="page-header">Profile</h1>
        <button id="edit-profile" class="btn-secondary flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit Profile
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="col-span-1">
          <div class="card p-6">
            <div class="text-center mb-6">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
                ${localStorage.getItem('userEmail')?.charAt(0).toUpperCase() || 'U'}
              </div>
              <h2 class="text-2xl font-bold mb-2">${localStorage.getItem('userName') || 'User'}</h2>
              <p class="text-gray-600">${localStorage.getItem('userEmail') || 'user@example.com'}</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Member since</span>
                <span class="font-medium">${new Date().toLocaleDateString()}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Recipes created</span>
                <span class="font-medium">0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Recipes saved</span>
                <span class="font-medium">0</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <div class="card p-6">
            <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Account Settings</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-gray-700 mb-2">Email Notifications</label>
                <div class="flex items-center justify-between">
                  <span>Receive recipe recommendations</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" checked>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-gray-700 mb-2">Privacy Settings</label>
                <div class="flex items-center justify-between">
                  <span>Make my profile public</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>

              <div class="pt-4 border-t">
                <button class="text-red-500 hover:text-red-700 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = content;

  const editProfileBtn = container.querySelector('#edit-profile');
  
  editProfileBtn.addEventListener('click', () => {
    // In a real app, this would enable editing mode
    alert('Edit profile functionality would be implemented here');
  });

  return container;
} 