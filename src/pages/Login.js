export function Login() {
  const container = document.createElement('div');
  container.className = 'main-bg min-h-screen';

  const content = `
    <div class="container">
      <div class="max-w-md mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">SavorySync</h1>
          <p class="text-gray-600">Your personal recipe companion</p>
        </div>

        <div class="card p-8">
          <div id="login-form" class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input type="email" id="login-email" class="input-field" placeholder="Enter your email">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Password</label>
              <input type="password" id="login-password" class="input-field" placeholder="Enter your password">
            </div>
            <button id="login-btn" class="btn-primary w-full">Login</button>
            <div class="flex justify-between items-center">
              <button id="show-signup" class="text-purple-600 hover:text-purple-800">Create Account</button>
              <button id="show-forgot-password" class="text-purple-600 hover:text-purple-800">Forgot Password?</button>
            </div>
          </div>

          <div id="signup-form" class="space-y-6 hidden">
            <div>
              <label class="block text-gray-700 mb-2">Name</label>
              <input type="text" id="signup-name" class="input-field" placeholder="Enter your name">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input type="email" id="signup-email" class="input-field" placeholder="Enter your email">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Password</label>
              <input type="password" id="signup-password" class="input-field" placeholder="Create a password">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Confirm Password</label>
              <input type="password" id="signup-confirm-password" class="input-field" placeholder="Confirm your password">
            </div>
            <button id="signup-btn" class="btn-primary w-full">Sign Up</button>
            <p class="text-center text-gray-600">
              Already have an account? 
              <button id="show-login" class="text-purple-600 hover:text-purple-800">Login</button>
            </p>
          </div>

          <div id="forgot-password-form" class="space-y-6 hidden">
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input type="email" id="forgot-email" class="input-field" placeholder="Enter your email">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">New Password</label>
              <input type="password" id="new-password" class="input-field" placeholder="Enter new password">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Confirm New Password</label>
              <input type="password" id="confirm-new-password" class="input-field" placeholder="Confirm new password">
            </div>
            <button id="reset-password-btn" class="btn-primary w-full">Reset Password</button>
            <p class="text-center text-gray-600">
              Remember your password? 
              <button id="show-login-from-forgot" class="text-purple-600 hover:text-purple-800">Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = content;

  // Get form elements
  const loginForm = container.querySelector('#login-form');
  const signupForm = container.querySelector('#signup-form');
  const forgotPasswordForm = container.querySelector('#forgot-password-form');
  const showSignupBtn = container.querySelector('#show-signup');
  const showLoginBtn = container.querySelector('#show-login');
  const showForgotPasswordBtn = container.querySelector('#show-forgot-password');
  const showLoginFromForgotBtn = container.querySelector('#show-login-from-forgot');
  const loginBtn = container.querySelector('#login-btn');
  const signupBtn = container.querySelector('#signup-btn');
  const resetPasswordBtn = container.querySelector('#reset-password-btn');

  // Initialize users array if it doesn't exist
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }

  // Toggle between forms
  showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    forgotPasswordForm.classList.add('hidden');
  });

  showLoginBtn.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    forgotPasswordForm.classList.add('hidden');
  });

  showForgotPasswordBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    forgotPasswordForm.classList.remove('hidden');
  });

  showLoginFromForgotBtn.addEventListener('click', () => {
    forgotPasswordForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  // Simple hash function for password
  const hashPassword = (password) => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString();
  };

  // Handle login
  loginBtn.addEventListener('click', () => {
    try {
      const email = container.querySelector('#login-email').value.trim();
      const password = container.querySelector('#login-password').value;

      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      const usersStr = localStorage.getItem('users');
      const users = JSON.parse(usersStr);
      const user = users.find(u => u.email === email);

      if (!user) {
        alert('No account found with this email. Please sign up first.');
        return;
      }

      if (hashPassword(password) !== user.password) {
        alert('Invalid password');
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', user.name);
      
      // Redirect to dashboard using hash-based routing
      window.location.hash = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  });

  // Handle signup
  signupBtn.addEventListener('click', () => {
    try {
      const name = container.querySelector('#signup-name').value.trim();
      const email = container.querySelector('#signup-email').value.trim();
      const password = container.querySelector('#signup-password').value;
      const confirmPassword = container.querySelector('#signup-confirm-password').value;

      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }

      const usersStr = localStorage.getItem('users');
      const users = JSON.parse(usersStr);

      if (users.some(user => user.email === email)) {
        alert('Email already registered. Please login instead.');
        return;
      }

      const newUser = {
        name,
        email,
        password: hashPassword(password)
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Show success message and redirect to login
      alert('Account created successfully! Please login with your credentials.');
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      
      // Clear signup form
      container.querySelector('#signup-name').value = '';
      container.querySelector('#signup-email').value = '';
      container.querySelector('#signup-password').value = '';
      container.querySelector('#signup-confirm-password').value = '';
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  });

  // Handle password reset
  resetPasswordBtn.addEventListener('click', () => {
    try {
      const email = container.querySelector('#forgot-email').value.trim();
      const newPassword = container.querySelector('#new-password').value;
      const confirmNewPassword = container.querySelector('#confirm-new-password').value;

      if (!email || !newPassword || !confirmNewPassword) {
        alert('Please fill in all fields');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        alert('Passwords do not match');
        return;
      }

      if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }

      const usersStr = localStorage.getItem('users');
      const users = JSON.parse(usersStr);
      const userIndex = users.findIndex(u => u.email === email);

      if (userIndex === -1) {
        alert('No account found with this email. Please sign up first.');
        return;
      }

      // Update password
      users[userIndex].password = hashPassword(newPassword);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Password reset successful. Please login with your new password.');
      forgotPasswordForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    } catch (error) {
      console.error('Password reset error:', error);
      alert('An error occurred while resetting your password. Please try again.');
    }
  });

  return container;
} 