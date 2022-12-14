import express from 'express';
import cors from 'cors';

import { router } from './routers/routes.mjs';
import connectionDatabase from './db/database.mjs';

connectionDatabase();

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
