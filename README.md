# RecipeeApi
A simple Recipe API built using Node.js, Express.js, and MongoDB. This API allows users to create, retrieve, update, and delete recipes while storing information like ingredients, cooking steps, and more.

🚨 Note: Image uploads and automated tests are currently not working but will be fixed soon.

# Features
- Create a new recipe with details like name, country of origin, category, ingredients, steps, cooking time, and description.
- Retrieve all recipes or filter by category.
- Retrieve a single recipe by its ID.
- Update an existing recipe's details.
- Delete a recipe

# API Documentation
The documentation is written using and supported on PostMan.
Tap the link to view the documentation:  https://documenter.getpostman.com/view/32603261/2sAYBXCBD2

# Endpoints
## Base URL: v1/api/recipes
 | Method	| Endpoint	| Description
 |--------|-----------|------------|
 | POST	  |   /	      | Create a new recipe
 | GET	  |   /	      | Retrieve all recipes
 | GET	  |  /:id	    | Retrieve a recipe by its ID
 | PATCH	|  /:id	    | Update a recipe by its ID
 | DELETE	|  /:id	    | Delete a recipe by its ID

# Technologies Used
- Node.js: Backend runtime environment.
- Express.js: Web framework for building APIs.
- MongoDB: Database for storing recipes.
- Mongoose: ODM for MongoDB.
- express-validator: For request validation.

# SetUp Instructions
## Prerequisites
- Install Node.js (v14 or higher).
- Install MongoDB and ensure it’s running locally or use a cloud instance (e.g., MongoDB Atlas).
- Clone this repository to your local machine.

## Steps
1. Clone the repository: ```git clone https://github.com/your-username/your-recipe-api-repo.git
cd your-recipe-api-repo```

2. Install dependencies: ```npm install```
3. Create a .env file in the root directory and add the following variables:  ```MONGO_URL=your_mongodb_connection_string
PORT=5000```
4. Start the development server:                                                                                                   ```npm run dev```
5. The API will be running at http://localhost:5000

# Example Request
## POST /api/recipes
Request Body:
```
{
  "recipeName": "Sauerbraten",
  "countryOfOrigin": "Germany",
  "image": "https://example.com/sauerbraten.jpg",
  "category": "Dinner",
  "ingredients": [
    { "name": "Beef roast", "quantity": "1.5kg" },
    { "name": "Vinegar", "quantity": "1 cup" },
    { "name": "Red wine", "quantity": "1 cup" },
    { "name": "Water", "quantity": "1 cup" },
    { "name": "Onion", "quantity": "1, sliced" },
    { "name": "Carrot", "quantity": "2, chopped" },
    { "name": "Celery", "quantity": "2 stalks, chopped" },
    { "name": "Bay leaf", "quantity": "1" },
    { "name": "Cloves", "quantity": "4" },
    { "name": "Peppercorns", "quantity": "1 tsp" },
    { "name": "Sugar", "quantity": "1 tbsp" },
    { "name": "Flour", "quantity": "2 tbsp" },
    { "name": "Butter", "quantity": "2 tbsp" }
  ],
  "steps": [
    "In a large bowl, mix vinegar, red wine, water, onion, carrot, celery, bay leaf, cloves, peppercorns, and sugar to create the marinade.",
    "Place the beef roast in the marinade and refrigerate for 2-3 days, turning occasionally.",
    "Remove the beef from the marinade and pat dry. Strain the marinade and reserve the liquid.",
    "In a pot, heat butter and brown the beef on all sides. Add the strained marinade and simmer for 2-3 hours until the beef is tender.",
    "Remove the beef and thicken the sauce with flour to create a gravy.",
    "Slice the beef and serve with the gravy, along with potato dumplings or red cabbage."
  ],
  "cookingTime": 240,
  "description": "Sauerbraten is a traditional German pot roast marinated in a tangy mixture of vinegar and spices, slow-cooked to perfection, and served with a rich gravy.",
  "dateAdded": "2024-10-03T15:00:00Z"
}
```
Response:
```
{
    "status": "success",
    "data": {
        "recipe": {
            "recipeName": "Sauerbraten",
            "countryOfOrigin": "Germany",
            "image": "https://example.com/sauerbraten.jpg",
            "category": "Dinner",
            "ingredients": [
                {
                    "name": "Beef roast",
                    "quantity": "1.5kg",
                    "_id": "67493a43cffec429eb81fea9"
                },
                {
                    "name": "Vinegar",
                    "quantity": "1 cup",
                    "_id": "67493a43cffec429eb81feaa"
                },
                {
                    "name": "Red wine",
                    "quantity": "1 cup",
                    "_id": "67493a43cffec429eb81feab"
                },
                {
                    "name": "Water",
                    "quantity": "1 cup",
                    "_id": "67493a43cffec429eb81feac"
                },
                {
                    "name": "Onion",
                    "quantity": "1, sliced",
                    "_id": "67493a43cffec429eb81fead"
                },
                {
                    "name": "Carrot",
                    "quantity": "2, chopped",
                    "_id": "67493a43cffec429eb81feae"
                },
                {
                    "name": "Celery",
                    "quantity": "2 stalks, chopped",
                    "_id": "67493a43cffec429eb81feaf"
                },
                {
                    "name": "Bay leaf",
                    "quantity": "1",
                    "_id": "67493a43cffec429eb81feb0"
                },
                {
                    "name": "Cloves",
                    "quantity": "4",
                    "_id": "67493a43cffec429eb81feb1"
                },
                {
                    "name": "Peppercorns",
                    "quantity": "1 tsp",
                    "_id": "67493a43cffec429eb81feb2"
                },
                {
                    "name": "Sugar",
                    "quantity": "1 tbsp",
                    "_id": "67493a43cffec429eb81feb3"
                },
                {
                    "name": "Flour",
                    "quantity": "2 tbsp",
                    "_id": "67493a43cffec429eb81feb4"
                },
                {
                    "name": "Butter",
                    "quantity": "2 tbsp",
                    "_id": "67493a43cffec429eb81feb5"
                }
            ],
            "steps": [
                "In a large bowl, mix vinegar, red wine, water, onion, carrot, celery, bay leaf, cloves, peppercorns, and sugar to create the marinade.",
                "Place the beef roast in the marinade and refrigerate for 2-3 days, turning occasionally.",
                "Remove the beef from the marinade and pat dry. Strain the marinade and reserve the liquid.",
                "In a pot, heat butter and brown the beef on all sides. Add the strained marinade and simmer for 2-3 hours until the beef is tender.",
                "Remove the beef and thicken the sauce with flour to create a gravy.",
                "Slice the beef and serve with the gravy, along with potato dumplings or red cabbage."
            ],
            "cookingTime": 240,
            "description": "Sauerbraten is a traditional German pot roast marinated in a tangy mixture of vinegar and spices, slow-cooked to perfection, and served with a rich gravy.",
            "dateAdded": "2024-10-03T15:00:00.000Z",
            "_id": "67493a43cffec429eb81fea8",
            "__v": 0
        }
    }
}
```
# Known Issues
1. Image Uploads: Currently, images are only supported as URLs in the image field. File uploads will be implemented soon.
2.Tests: Automated tests are not functional yet. They will be added in a future update to ensure API reliability.

# License
This project is licensed under the MIT License.
