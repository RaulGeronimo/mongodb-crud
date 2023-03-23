import { config } from "dotenv";

config()

export const MONGODB_URI = 
process.env.MONGODB_URI || 'mongodb+srv://raul:1829301@task.qvskeun.mongodb.net/?retryWrites=true&w=majority';

export const PORT = process.env.PORT || 3000;