import { text } from 'express';
import Recipe from '../models/recipeModel.mjs';

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        recipe: newRecipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
export const getAllRecipes = async (req, res) => {
  try {
    const { category } = req.query;
    let recipes;

    if (category) {
      recipes = await Recipe.find({ category });
    } else {
      recipes = await Recipe.find();
    }
    res.status(200).json({
      status: 'success',
      results: recipes.length,
      data: {
        recipes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

export const getRecipe = async (req, res) => {
  try {
    const findRecipe = await Recipe.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        recipe: findRecipe,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `Recipe not found !! - ${err}`,
    });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        recipe: updatedRecipe,
        message: 'Recipe successfully Updated',
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
