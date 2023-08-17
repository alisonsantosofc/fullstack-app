import { inject, injectable } from 'tsyringe';

import { User } from '../../models/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(query: string): Promise<User[]> {
    const users = await this.usersRepository.list(query);

    return users;
  }
}

export { ListUsersUseCase };
