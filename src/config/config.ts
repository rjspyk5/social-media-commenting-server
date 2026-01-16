import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number | string
    uri: string
}

export const config: Config = {
    port: process.env.PORT || 3001,
    uri: process.env.MONGO_URI as string
}