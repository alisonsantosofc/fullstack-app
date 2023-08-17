import { container } from "tsyringe";
import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {q: query} = req.params;

    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute(query);

    return res.json(users)
  }
}

export { ListUsersController };
