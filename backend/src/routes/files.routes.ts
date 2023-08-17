import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ImportUsersController } from '../modules/users/useCases/importUsers/ImportUsersController';

const filesRoutes = Router();

const uploadCSVFile = multer(uploadConfig.upload('./tmp/csv'));

const importUsersController = new ImportUsersController();

filesRoutes.post(
  '/',
  uploadCSVFile.single('file'),
  importUsersController.handle
);

export { filesRoutes };
