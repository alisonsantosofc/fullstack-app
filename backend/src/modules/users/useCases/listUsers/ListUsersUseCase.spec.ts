import 'reflect-metadata';

import { UsersRepositoryMock } from '../../repositories/mock/UsersRepositoryMock';
import { ListUsersUseCase } from './ListUsersUseCase';

let listUsersUseCase: ListUsersUseCase;
let usersRepositoryMock: UsersRepositoryMock;

describe('List Users', () => {
  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();

    listUsersUseCase = new ListUsersUseCase(usersRepositoryMock);
  });

  it('shold be able to list users', async () => {
    await usersRepositoryMock.create({
      name: 'John doe',
      city: 'New York',
      country: 'USA',
      favorite_sport: 'Basketball',
    });

    await usersRepositoryMock.create({
      name: 'Jane',
      city: 'London',
      country: 'UK',
      favorite_sport: 'Football',
    });

    const users = await listUsersUseCase.execute('');

    expect(users.length).toEqual(2);
  });

  it('shold be able to list users with query param', async () => {
    await usersRepositoryMock.create({
      name: 'John doe',
      city: 'New York',
      country: 'USA',
      favorite_sport: 'Basketball',
    });

    await usersRepositoryMock.create({
      name: 'Jane',
      city: 'London',
      country: 'UK',
      favorite_sport: 'Football',
    });

    const users = await listUsersUseCase.execute('new');

    expect(users[0].city).toEqual('New York');
  });
});
