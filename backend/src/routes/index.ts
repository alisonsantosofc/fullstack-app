import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { filesRoutes } from './files.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/files', filesRoutes);

export { routes };
