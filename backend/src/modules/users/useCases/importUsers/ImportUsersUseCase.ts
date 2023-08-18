import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import csvParser from 'csv-parser';

import { UserDTO } from '../../models/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

@injectable()
class ImportUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(csvFilePath: string): Promise<void> {
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
        await fs.promises?.unlink(csvFilePath);
      });
  }
}

export { ImportUsersUseCase };
