import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_CLOUD_API);
console.log(process.env.CLOUDINARY_CLOUD_SECRET);

export default cloudinary;
