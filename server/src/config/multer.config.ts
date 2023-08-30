import { diskStorage } from 'multer';
import { dirname, extname, join } from 'path';

// Define the storage configuration
const storage = diskStorage({
  destination: join(dirname(__dirname), 'uploads'), // Specify the destination folder for uploaded images
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(file.originalname);
    callback(null, uniqueSuffix + extension); // Generate a unique filename for each uploaded image
  },
});

const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error('Only image and document files are allowed.'), false);
  }
};
// Export the Multer configuration
export const multerConfig = {
  storage: storage,
  fileFilter: fileFilter,
};
