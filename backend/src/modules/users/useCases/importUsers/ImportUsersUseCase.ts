import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';
import csvParser from 'csv-parser';

import { UserDTO } from '../../models/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class ImportUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(csvFilePath: string): Promise<void> {
    const validationErrors: string[] = [];

    if (path.extname(csvFilePath) !== '.csv') {
      throw new AppError('Invalid file format. Only CSV files are allowed.');
    }

    const stream = fs.createReadStream(csvFilePath).pipe(csvParser());

    stream.on('data', async (data: UserDTO) => {
      if (!data.name || !data.city || !data.country || !data.favorite_sport) {
        validationErrors.push(
          `Incomplete data for user: ${JSON.stringify(data)}`
        );
      } else {
        await this.usersRepository.create({
          name: data.name,
          city: data.city,
          country: data.country,
          favorite_sport: data.favorite_sport,
        });
      }
    });

    stream.on('end', async () => {
      await fs.promises?.unlink(csvFilePath);
    });
  }
}

export { ImportUsersUseCase };
