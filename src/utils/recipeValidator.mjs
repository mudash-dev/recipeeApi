import { check, validationResult } from 'express-validator';
const recipeValidationRules = [
  check('recipeName').notEmpty().withMessage('Recipe name is required'),

  check('countryOfOrigin')
    .notEmpty()
    .withMessage('Country of origin must be mentioned'),

  check('category')
    .isIn(['Breakfast', 'Lunch', 'Dinner', 'Dessert'])
    .withMessage('Recipe must be one of Breakfast, Lunch, Dinner or Dessert'),

  check('ingredients')
    .isArray({ min: 1 })
    .withMessage('Ingredients must be an array with at least one ingredient'),

  check('ingredients.*.name')
    .notEmpty()
    .withMessage('Each ingredient must have a name'),
  check('ingredients.*.quantity')
    .notEmpty()
    .withMessage('Each ingredient must have a quantity'),
  check('steps')
    .isArray({ min: 1 })
    .withMessage('Steps must be an array with at least one step'),
  check('cookingTime')
    .isInt({ min: 1 })
    .withMessage('Cooking time must be a positive integer'),
];

const validateRecipe = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

export { recipeValidationRules, validateRecipe };
