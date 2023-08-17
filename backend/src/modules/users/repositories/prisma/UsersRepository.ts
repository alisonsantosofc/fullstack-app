import { PrismaClient } from '@prisma/client';

import { UserDTO, User } from "../../models/User";
import { IUsersRepository } from "../IUsersRepositories";

class UsersRepository implements IUsersRepository {
  private prisma = new PrismaClient();

  async create({
    name,
    city,
    country,
    favorite_sport,
  }: UserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name,
        city,
        country,
        favorite_sport,
      }
    });

    return user;
  }

  async list(query: string): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { city: { contains: query } },
          { country: { contains: query } },
          { favorite_sport: { contains: query } },
        ],
      },
    });

    return users;
  }
}

export { UsersRepository };