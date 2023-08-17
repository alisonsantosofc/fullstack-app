import { UserDTO, User } from "../../models/User";
import { IUsersRepository } from "../IUsersRepositories";
import { v4 as uuidV4 } from 'uuid';

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [];

  async create(data: UserDTO): Promise<User> {
    const user = {
      ...data,
      id: uuidV4(),
    }

    this.users.push(user);

    return user;
  }

  async list(query: string): Promise<User[]> {
    return this.users;
  }
}

export { UsersRepositoryMock };