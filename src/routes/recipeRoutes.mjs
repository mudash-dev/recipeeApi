import express from 'express';
import {
  recipeValidationRules,
  validateRecipe,
} from '../utils/recipeValidator.mjs';
import * as recipeController from '../controllers/recipeController.mjs';
const router = express.Router();

router
  .route('/')
  .get(recipeController.getAllRecipes)
  .post(recipeValidationRules, validateRecipe, recipeController.createRecipe);

router
  .route('/:id')
  .get(recipeController.getRecipe)
  .patch(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

export default router;
