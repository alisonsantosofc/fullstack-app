import crypto from 'crypto';
import path from 'path';
import multer from 'multer';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', folder),
        filename(req, file, callback) {
          const fileHash = crypto.randomBytes(4).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
