import express from 'express';
import recipeRouter from './src/routes/recipeRoutes.mjs';

const app = express();

app.use(express.json());

app.use('/api/v1/recipes', recipeRouter);

export default app;
