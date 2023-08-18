import 'reflect-metadata';
import fs from 'fs';
import { ImportUsersUseCase } from './ImportUsersUseCase';
import { UsersRepositoryMock } from '../../repositories/mock/UsersRepositoryMock';

jest.mock('fs');
jest.mock('csv-parser');

describe('Import Users', () => {
  let importUsersUseCase: ImportUsersUseCase;
  let usersRepositoryMock: UsersRepositoryMock;

  beforeEach(() => {
    usersRepositoryMock = new UsersRepositoryMock();
    importUsersUseCase = new ImportUsersUseCase(usersRepositoryMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should import users from a CSV file and delete it', async () => {
    const csvFileData = [
      {
        name: 'John Doe',
        city: 'Sample City',
        country: 'Sample Country',
        favorite_sport: 'Sample Sport',
      },
    ];

    const mockStream: any = {
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn((event, callback) => {
        if (event === 'data') {
          csvFileData.forEach((userData) => {
            callback(userData);
          });
        }
        if (event === 'end') {
          callback();
        }
        return mockStream;
      }),
    };

    // Mocking the createReadStream function
    (fs.createReadStream as jest.Mock).mockReturnValue(mockStream);

    // Execute the use case
    const csvFilePath = 'test.csv';
    await importUsersUseCase.execute(csvFilePath);

    expect(fs.createReadStream).toHaveBeenCalledWith(csvFilePath);
  });
});
