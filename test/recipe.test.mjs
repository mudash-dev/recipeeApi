import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.mjs';
import mongoose from 'mongoose';
import Recipe from '../src/models/recipeModel.mjs';

chai.use(chaiHttp);
const { expect } = chai;

describe('Recipe API', () => {
  beforeEach(async () => {
 
    await Recipe.deleteMany({});
  });

  describe('POST /api/v1/recipes', () => {
    it('should create a new recipe', async () => {
      const newRecipe = {
        recipeName: 'Pancakes',
        countryOfOrigin: 'USA',
        image: 'https://example.com/pancakes.jpg',
        category: 'Breakfast',
        ingredients: [{ name: 'Flour', quantity: '2 cups' }],
        steps: ['Mix ingredients', 'Cook in a pan'],
        cookingTime: 20,
        description: 'Delicious pancakes for breakfast.',
      };

      const res = await chai
        .request(app)
        .post('/api/v1/recipes')
        .send(newRecipe);

      expect(res).to.have.status(201);
      expect(res.body.data.recipe).to.include({
        recipeName: 'Pancakes',
        countryOfOrigin: 'USA',
      });
    });

    it('should return 400 if required fields are missing', async () => {
      const incompleteRecipe = {
        recipeName: 'Pancakes',
      };

      const res = await chai
        .request(app)
        .post('/api/v1/recipes')
        .send(incompleteRecipe);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('errors');
    });
  });

  describe('GET /api/v1/recipes', () => {
    it('should retrieve all recipes', async () => {
      await Recipe.create({
        recipeName: 'Tacos',
        countryOfOrigin: 'Mexico',
        image: 'https://example.com/tacos.jpg',
        category: 'Lunch',
        ingredients: [{ name: 'Tortillas', quantity: '5' }],
        steps: ['Prepare tortillas', 'Cook the filling'],
        cookingTime: 30,
        description: 'Tacos for lunch.',
      });

      const res = await chai.request(app).get('/api/v1/recipes');
      expect(res).to.have.status(200);
      expect(res.body.results).to.equal(1);
      expect(res.body.data.recipes[0].to.have.property('recipeName', 'Tacos'));
    });
  });

  describe('GET /api/v1/recipes/:id', () => {
    it('should retrieve a single recipe by ID', async () => {
      const recipe = await Recipe.create({
        recipeName: 'Biryani',
        countryOfOrigin: 'India',
        image: 'https://example.com/biryani.jpg',
        category: 'Dinner',
        ingredients: [{ name: 'Rice', quantity: '2 cups' }],
        steps: ['Boil rice', 'Cook chicken'],
        cookingTime: 60,
        description: 'Spicy and delicious biryani.',
      });

      const res = await chai.request(app).get(`/api/v1/recipes/${recipe._id}`);
      expect(res).to.have.status(200);
      expect(res.body.data.recipe).to.have.property('recipeName', 'Biryani');
    });

    it('should return 404 if recipe is not found', async () => {
      const res = await chai
        .request(app)
        .get('/api/v1/recipes/615f4fc2e47d8a4d3b7851c7'); // Nonexistent ID
      expect(res).to.have.status(404);
      expect(res.body.message).to.contain('Recipe not found');
    });
  });

  describe('PATCH /api/v1/recipes/:id', () => {
    it('should update an existing recipe', async () => {
      const recipe = await Recipe.create({
        recipeName: 'Sushi',
        countryOfOrigin: 'Japan',
        image: 'https://example.com/sushi.jpg',
        category: 'Dinner',
        ingredients: [{ name: 'Rice', quantity: '2 cups' }],
        steps: ['Cook rice', 'Prepare sushi rolls'],
        cookingTime: 40,
        description: 'Authentic Japanese sushi.',
      });

      const res = await chai
        .request(app)
        .patch(`/api/v1/recipes/${recipe._id}`)
        .send({ recipeName: 'Updated Sushi' });
      expect(res).to.have.status(200);
      expect(res.body.data.recipe).to.have.property(
        'recipeName',
        'Updated Sushi'
      );
    });
  });

  describe('DELETE /api/v1/recipes/:id', () => {
    it('should delete an existing recipe', async () => {
      const recipe = await Recipe.create({
        recipeName: 'Ramen',
        countryOfOrigin: 'Japan',
        image: 'https://example.com/ramen.jpg',
        category: 'Lunch',
        ingredients: [{ name: 'Noodles', quantity: '200g' }],
        steps: ['Boil noodles', 'Prepare broth'],
        cookingTime: 30,
        description: 'Classic Japanese ramen.',
      });

      const res = await chai
        .request(app)
        .delete(`/api/v1/recipes/${recipe._id}`);
      expect(res).to.have.status(204);
    });
  });
});
