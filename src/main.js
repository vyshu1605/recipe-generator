import { createRouter } from './router.js';
import { initChatbot } from './components/Chatbot.js';

// Initialize the router
const router = createRouter();

// Initialize the chatbot
initChatbot();

// Handle navigation
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-route]')) {
    e.preventDefault();
    const route = e.target.getAttribute('data-route');
    router.navigate(route);
  }
});

// Initial render
router.navigate(window.location.pathname || '/dashboard'); 