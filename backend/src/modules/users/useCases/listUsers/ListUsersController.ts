import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { q: query } = req.query;

    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute(query as string);

    return res.json(users);
  }
}

export { ListUsersController };
