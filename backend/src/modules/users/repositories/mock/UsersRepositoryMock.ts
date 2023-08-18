import { v4 as uuidV4 } from 'uuid';
import { UserDTO, User } from '../../models/User';
import { IUsersRepository } from '../IUsersRepositories';

class UsersRepositoryMock implements IUsersRepository {
  private users: User[] = [];

  async create(data: UserDTO): Promise<User> {
    const user = {
      ...data,
      id: uuidV4(),
      created_at: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async list(query: string): Promise<User[]> {
    const filteredUsers = this.users.filter((user) => {
      const lowercaseQuery = query.toLowerCase();
      return (
        user.name.toLowerCase().includes(lowercaseQuery) ||
        user.city.toLowerCase().includes(lowercaseQuery) ||
        user.country.toLowerCase().includes(lowercaseQuery) ||
        user.favorite_sport.toLowerCase().includes(lowercaseQuery)
      );
    });

    return filteredUsers;
  }
}

export { UsersRepositoryMock };
