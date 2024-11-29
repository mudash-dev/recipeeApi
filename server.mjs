import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app.mjs';

dotenv.config({ path: './config.env' });
const db = process.env.DATABASE_LOCAL;

mongoose
  .connect(db, { serverSelectionTimeoutMS: 20000 })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => console.log(`Database connection failed: ${err}`));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
