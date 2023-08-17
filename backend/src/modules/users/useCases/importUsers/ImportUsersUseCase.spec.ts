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
      // ... add more test data as needed
    ];

    // Mocking the createReadStream function
    (fs.createReadStream as jest.Mock).mockReturnValue({
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn().mockImplementation((event, callback) => {
        if (event === 'data') {
          csvFileData.forEach((userData) => {
            callback(userData);
          });
        } else if (event === 'end') {
          callback();
        }
        return this;
      }),
    });

    // Execute the use case
    const csvFilePath = 'test.csv';
    await importUsersUseCase.execute(csvFilePath);

    // Verify that the create and delete operations were called correctly
    expect(usersRepositoryMock.create).toHaveBeenCalledTimes(
      csvFileData.length
    );
    expect(fs.promises.unlink).toHaveBeenCalledWith(csvFilePath);
    expect(fs.createReadStream).toHaveBeenCalledWith(csvFilePath);
  });
});
