import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportUsersUseCase } from "./ImportUsersUseCase";

class ImportUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const csvFilePath = String(req.file?.path);

    const importUsersUseCase = container.resolve(ImportUsersUseCase);

    await importUsersUseCase.execute(csvFilePath);

    return res.json({ message: 'CSV file uploaded and processed successfully.' });
  }
}

export { ImportUsersController };
