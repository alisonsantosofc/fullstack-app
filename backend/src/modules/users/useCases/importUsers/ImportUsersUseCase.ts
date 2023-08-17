import { inject, injectable } from 'tsyringe';
import csvParser from 'csv-parser';
import fs from 'fs';

import { UserDTO } from "../../models/User";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from '../../repositories/IUsersRepositories';

@injectable()
class ImportUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute( csvFilePath: string): Promise<void> {
    try {
      fs.createReadStream(csvFilePath)
      .pipe(csvParser())
        .on('data', async (data: UserDTO) => {
          await this.usersRepository.create({
            name: data.name,
            city: data.city,
            country: data.country,
            favorite_sport: data.favorite_sport,
          });
        })
        .on('end', async () => {
          return; 
        });
    } catch (error) {
      throw new AppError('An error occurred while processing the CSV file.', 500)
    }
  }
}

export { ImportUsersUseCase };
