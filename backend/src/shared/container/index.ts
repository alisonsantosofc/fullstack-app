import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/users/repositories/IUsersRepositories';
import { UsersRepository } from '../../modules/users/repositories/prisma/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
