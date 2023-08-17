import { User, UserDTO } from "../models/User";

interface IUsersRepository {
  create(data: UserDTO): Promise<User>;
  list(query: string): Promise<User[]>;
}

export { IUsersRepository };