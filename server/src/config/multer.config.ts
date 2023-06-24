import { diskStorage } from 'multer';
import { extname } from 'path';

// Define the storage configuration
const storage = diskStorage({
  destination: './uploads', // Specify the destination folder for uploaded images
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(file.originalname);
    callback(null, uniqueSuffix + extension); // Generate a unique filename for each uploaded image
  },
});

// Define the file filter to only accept image files
const fileFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image/')) {
    callback(null, true);
  } else {
    callback(new Error('Only image files are allowed.'), false);
  }
};

// Export the Multer configuration
export const multerConfig = {
  storage: storage,
  fileFilter: fileFilter,
};
