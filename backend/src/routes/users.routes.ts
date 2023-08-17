import { Router } from 'express';

import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';

const usersRoutes = Router();

const listUsersController = new ListUsersController();

usersRoutes.get('/', listUsersController.handle);

export { usersRoutes };
