import { Router } from 'express';

import UserController from '../controllers/UserController.mjs';
import UserMiddlewares from '../middlewares/UserMiddlewares.mjs';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello World!' }));
router.get('/users', UserController.index);

router.post('/users', UserController.create);

router.put('/users/:id', UserMiddlewares.validateId, UserController.update);
router.delete('/users/:id', UserMiddlewares.validateId, UserController.delete);

export { router };
