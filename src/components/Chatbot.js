export function initChatbot() {
  const chatbot = document.createElement('div');
  chatbot.className = 'fixed bottom-4 right-4 z-50';
  
  const content = `
    <div class="relative">
      <button id="chatbot-toggle" class="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      
      <div id="chatbot-window" class="hidden absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl">
        <div class="p-4 border-b">
          <h3 class="font-semibold">Recipe Assistant</h3>
        </div>
        
        <div id="chat-messages" class="h-64 overflow-y-auto p-4">
          <div class="bg-gray-100 rounded-lg p-2 mb-2">
            <p>Hello! How can I help you with your recipes today?</p>
          </div>
        </div>
        
        <div class="p-4 border-t">
          <div class="flex gap-2">
            <input type="text" id="chat-input" class="input-field flex-1" placeholder="Type your message...">
            <button id="send-message" class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  chatbot.innerHTML = content;
  document.body.appendChild(chatbot);
  
  // Add event listeners
  const toggleButton = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-message');
  const chatMessages = document.getElementById('chat-messages');
  
  toggleButton.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
  });
  
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `bg-${isUser ? 'blue' : 'gray'}-100 rounded-lg p-2 mb-2`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, true);
      chatInput.value = '';
      // Simulate bot response
      setTimeout(() => {
        addMessage("I'm a demo chatbot. In a real implementation, I would process your message and provide helpful responses!");
      }, 1000);
    }
  });
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });
} 