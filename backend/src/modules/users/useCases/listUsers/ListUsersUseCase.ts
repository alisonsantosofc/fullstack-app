import { inject, injectable } from "tsyringe";

import { User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(query: string): Promise<User[]> {
    if (typeof query !== 'string') {
      throw new AppError('Invalid query parameter.');
    }

    const users = await this.usersRepository.list(query);

    return users;
  }
}

export { ListUsersUseCase };
