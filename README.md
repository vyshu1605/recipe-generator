SavorySync - Recipe Generator

Overview
SavorySync is a modern web application that helps users generate, manage, and share recipes. Built with vanilla JavaScript and featuring a beautiful, responsive UI, it provides a seamless experience for culinary enthusiasts. The application allows users to create personalized recipes, manage grocery lists, document culinary memories, and connect with a community of food lovers.

Project Structure
```

savorysync/
├── src/
│   ├── pages/
│   │   ├── Dashboard.js        # Main dashboard with feature navigation
│   │   ├── GenerateRecipe.js   # Recipe generation functionality
│   │   ├── GroceryList.js      # Grocery list management
│   │   ├── FlavorMemories.js   # Culinary memory documentation
│   │   ├── CommunityRecipes.js # Community recipe sharing
│   │   ├── SavedRecipes.js     # Saved recipes management
│   │   ├── Profile.js          # User profile management
│   │   └── Login.js            # Authentication handling
│   ├── styles/
│   │   └── main.css            # Main stylesheet
│   ├── router.js               # Client-side routing
│   └── main.js                 # Application entry point
├── index.html                  # Main HTML file
└── README.md                   # Project documentation
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No additional server requirements (runs entirely client-side)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/savorysync.git
   ```

2. Navigate to the project directory:
   ```bash
   cd savorysync
   ```

3. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server

   # Using Node.js
   npx serve
   ```

## Features

### User Authentication
- Secure login and signup functionality
- Session persistence using localStorage
- Protected routes for authenticated users

### Recipe Generation
- Create recipes based on available ingredients
- Save and manage generated recipes
- Add ingredients to grocery list
- Generate personalized cooking instructions

### Grocery List Management
- Add items with quantities and units
- Mark items as purchased
- Download grocery list
- Remove items
- Organize by categories

### Flavor Memories
- Document culinary experiences
- Add photos and stories
- Organize memories by date/category
- Share with community

### Community Recipes
- Discover recipes from other users
- Share your own recipes
- Search and filter recipes
- Rate and comment on recipes

### Saved Recipes
- Save your favorite recipes
- Organize your collection
- Quick access to saved recipes
- Create custom categories

### Profile Management
- Update account information
- Manage preferences
- View activity history
- Customize profile settings

## Technologies Used
- HTML5
- CSS3 (with Tailwind CSS)
- Vanilla JavaScript
- Local Storage for data persistence
- Client-side routing
- Modern UI/UX principles

## Usage Guide

### Sign Up/Login
1. Click on "Sign Up" to create a new account
2. Fill in your details and create a password
3. Use your credentials to log in
4. Access all features after authentication

### Generate Recipes
1. Navigate to "Generate Recipe"
2. Add ingredients you have available
3. Click "Generate" to create a recipe
4. Save or add ingredients to grocery list

### Manage Grocery List
1. Go to "Grocery List"
2. Add items with quantities and units
3. Mark items as purchased when done
4. Download list for shopping

### Document Memories
1. Access "Flavor Memories"
2. Add photos and stories
3. Organize by date or category
4. Share with community

### Explore Community
1. Visit "Community Recipes"
2. Browse recipes from others
3. Share your own recipes
4. Connect with other users

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

