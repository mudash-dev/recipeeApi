import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'],
    required: true,
  },
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  steps: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
